import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

import { Text, Navigation, Footer, View } from '../../components/Quote'
import { FETCH_QUOTE } from '../../messages'
import getQuote from '../../actions/quotes'

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
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.quote) {
      // assign quote ID from the URL's query string
      this.quoteId = Number(this.qsParams.quote)
    } else {
      this.quoteId = this.props.startingQuoteId
      // update URL in browser to reflect current quote in query string
      this.props.history.push(`/?quote=${this.quoteId}`)
    }
  }

  componentDidMount() {
    this.setQuoteIdFromQueryString(this.props.location.search)
    this.props.fetchQuote(this.quoteId)
  }

  componentWillReceiveProps(nextProps) {
    this.setQuoteIdFromQueryString(nextProps.location.search)
    this.props.fetchQuote(this.quoteId)
  }

  render() {
    return (
      <View {...this.props} />
    )
  }
}

export default connect(mapStateToViewProps, mapDispatchToViewProps)(QuotesDisplay)
