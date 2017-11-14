import axios from 'axios'
import * as actionTypes from './actionTypes'

export function getQuoteIsLoading(status) {
  return {
    type: actionTypes.GET_QUOTE_IS_LOADING,
    isLoading: status,
    error: false,
  }
}

export function getQuoteDidError(err) {
  return {
    type: actionTypes.GET_QUOTE_DID_ERROR,
    isLoading: false,
    error: err,
  }
}

export function getQuoteSuccess(quote) {
  return {
    type: actionTypes.GET_QUOTE_SUCESS,
    isLoading: false,
    quote,
  }
}

export function getQuote(url) {
  return dispatch => {
    dispatch(getQuoteIsLoading(true))

    axios.get(url)
      .then(response => {
        if (response.status !== 200) {
          dispatch(getQuoteDidError(`Error: ${response.statusText}`))
        }

        dispatch(getQuoteIsLoading(false))
        return response
      })
      .then(quote => dispatch(getQuoteSuccess(quote.data)))
      .catch(err => dispatch(getQuoteDidError(err)))
  }
}
