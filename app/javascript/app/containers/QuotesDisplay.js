import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

import { Text, Navigation, Footer, View } from '../components/Quote'
import { getQuote } from '../actions/quotes'

const mapStateToViewProps = state => {
  const { quote = {} } = state

  return {
    quote,
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
  setQuoteIdFromQueryString(qs) {
    let quoteId;

    this.qsParams = queryString.parse(qs)

    if (this.qsParams.quote) {
      // assign quote ID from the URL's query string
      quoteId = Number(this.qsParams.quote)
    } else {
      quoteId = this.props.startingQuoteId
      // update URL in browser to reflect current quote in query string
      this.props.history.push(`/?quote=${quoteId}`)
    }
    // fetch Quote
    this.props.fetchQuote(quoteId)
  }

  componentDidMount() {
    this.setQuoteIdFromQueryString(this.props.location.search)
  }

  componentWillReceiveProps(nextProps) {
    this.setQuoteIdFromQueryString(nextProps.location.search)
  }

  render() {
    return (
      <View {...this.props} />
    )
  }
}

export default connect(mapStateToViewProps, mapDispatchToViewProps)(QuotesDisplay)
