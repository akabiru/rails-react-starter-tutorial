import React from 'react'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

import { Text, Navigation, Footer } from '../../components/Quote'
import { FETCH_QUOTE } from '../../messages'

class QuotesDisplay extends React.Component {
  fetchQuote(id) {
    store.dispatch({
      type: FETCH_QUOTE,
      quoteId: id,
    })
  }

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
    this.fetchQuote(this.quoteId)
  }

  componentWillReceiveProps(nextProps) {
    this.setQuoteIdFromQueryString(nextProps.location.search)
    this.fetchQuote(this.quoteId)
  }

  render() {
    const state = store.getState()
    const quote = state.quote
    const nextQuoteId = quote.next_id
    const previousQuoteId = quote.previous_id
    const fireRedirect = state.fireRedirect

    return (
      <div>
        <div className="quote-container">
          {fireRedirect && <Redirect to={'/'} />}

          {previousQuoteId &&
            <Navigation
              direction='previous'
              otherQuoteId={previousQuoteId}
            />
          }

          <Text {...quote} />

          {nextQuoteId &&
            <Navigation
              direction='next'
              otherQuoteId={nextQuoteId}
            />
          }
        </div>
        {quote.id !== parseInt(this.props.startingQuoteId, 10) &&
          <Footer startingQuoteId={this.props.startingQuoteId} />
        }
      </div>
    )
  }
}

export default QuotesDisplay
