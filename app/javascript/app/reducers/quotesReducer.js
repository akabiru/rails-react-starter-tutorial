import axios from 'axios'
import * as actionTypes from '../actions/actionTypes'

function quotesReducer(state = {}, action) {
  switch(action.type) {
    case actionTypes.GET_QUOTE:
      return Object.assign({}, state, {
        quote: action.quote,
        fireRedirect: action.fireRedirect,
      })
    case actionTypes.GET_QUOTE_SUCESS:
      return Object.assign({}, state, {
        quote: action.quote,
        isLoading: false,
        fireRedirect: false,
      })
    case actionTypes.GET_QUOTE_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        error: false,
        fireRedirect: false,
      })
    default:
      return state
  }
}

export default quotesReducer
