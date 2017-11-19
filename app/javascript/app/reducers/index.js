import { combineReducers } from 'redux'
import quotesReducer from './quotesReducer'

const RootReducer = combineReducers({
  quote: quotesReducer,
})

export default RootReducer
