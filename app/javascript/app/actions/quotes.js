import axios from 'axios'
import * as actionTypes from './actionTypes'

export function getQuoteIsLoading(status) {
  return {
    type: actionTypes.GET_QUOTE_IS_LOADING,
    isLoading: status,
    error: false,
    fireRedirect: false,
  }
}

export function getQuoteDidError(err) {
  return {
    type: actionTypes.GET_QUOTE_DID_ERROR,
    isLoading: false,
    error: err,
    fireRedirect: true,
  }
}

export function getQuoteSuccess(quote) {
  return {
    type: actionTypes.GET_QUOTE_SUCESS,
    isLoading: false,
    quote,
    fireRedirect: false,
  }
}

export function getQuote(url) {
  return dispatch => {
    dispatch(getQuoteIsLoading(true))

    return axios.get(url)
      .then(response => {
        dispatch(getQuoteSuccess(response.data))

        return response
      })
      .catch(err => dispatch(getQuoteDidError(err)))
  }
}
