import React from 'react'
import ReactDOM from 'react-dom'
import App from '../app/containers/App'

const quotes = document.querySelector('#quotes')

ReactDOM.render(
  <App startingQuoteId={quotes.dataset.startingQuoteId} />,
  quotes
)

