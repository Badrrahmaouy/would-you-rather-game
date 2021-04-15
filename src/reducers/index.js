import { loadingBarReducer } from "react-redux-loading-bar"
import { combineReducers } from "redux"
import authedUser from './authedUser'
import quests from './quests'
import users from './users'

export default combineReducers({
  authedUser,
  quests,
  users,
  loadingBar: loadingBarReducer
})