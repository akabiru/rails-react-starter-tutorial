import axios from 'axios'
import * as actionTypes from '../actions/actionTypes'

function quotesReducer(state = {}, action) {
  switch(action.type) {
    case actionTypes.GET_QUOTE:
      return Object.assign({}, state, {
        quote: action.quote,
        fireRedirect: action.fireRedirect,
      })
    // {
    //   axios.get(`api/quotes/${action.quouteId}`)
    //     .then(response => {
    //       return Object.assign({}, state, {
    //         quote: response.data
    //       })
    //     })
    //     .catch(error => {
    //       console.error(error)
    //       return Object.assign({}, state, {
    //         fireRedirect: true
    //       })
    //     })
    // }
    default:
      return state
  }
}

export default quotesReducer
