import { combineReducers } from 'redux'
import quotesReducer from './quotesReducer'

const RootReducer = combineReducers({
  quotes: quotesReducer,
})

export default RootReducer
