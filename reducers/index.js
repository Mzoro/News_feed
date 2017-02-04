import { combineReducers } from 'redux'
import messages from './messages'
import searchedInfo from './searchedInfo'

export default combineReducers({
  messages,
  searchedInfo
})