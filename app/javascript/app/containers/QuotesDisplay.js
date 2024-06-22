import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

import { Text, Navigation, Footer, View } from '../components/Quote'
import { getQuote } from '../actions/quotes'

const mapStateToViewProps = (state, ownProps) => {
  console.log('ownProps: ', ownProps)
  console.log('state: ', state)
  const { quote: { quote = {} } } = state
  const qs = ownProps.location.search
  const quoteId = queryString.parse(qs).quote || ownProps.startingQuoteId

  return {
    quote,
    quoteId,
    nextQuoteId: quote.next_id,
    previousQuoteId: quote.previous_id,
    fireRedirect: state.fireRedirect,
  }
}

const mapDispatchToViewProps = dispatch => (
  {
    fetchQuote: (id) => dispatch(getQuote(`api/quotes/${id}`)),
  }
)

class QuotesDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchQuote(this.props.quoteId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quoteId !== this.props.quoteId) {
      this.props.fetchQuote(nextProps.quoteId)
    }
  }

  render() {
    return (
      <View {...this.props} />
    )
  }
}

export default connect(mapStateToViewProps, mapDispatchToViewProps)(QuotesDisplay)
