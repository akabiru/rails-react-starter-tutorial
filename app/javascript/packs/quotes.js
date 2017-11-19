import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from '../app/containers/App'
import configureStore from '../app/store/configureStore'

const quotes = document.querySelector('#quotes')
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App startingQuoteId={quotes.dataset.startingQuoteId} />
  </Provider>,
  quotes
)

