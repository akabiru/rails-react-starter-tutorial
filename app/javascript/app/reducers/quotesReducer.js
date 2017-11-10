import axios from 'axios'
import { FETCH_QUOTE } from '../messages'

function quotesReducer(state = {}, action) {
  switch(action.type) {
    case FETCH_QUOTE: {
      axios.get(`api/quotes/${action.quouteId}`)
        .then(response => {
          return Object.assign({}, state, {
            quote: response.data
          })
        })
        .catch(error => {
          console.error(error)
          return Object.assign({}, state, {
            fireRedirect: true
          })
        })
    }
    default:
      return state
  }
}

export default quotesReducer
