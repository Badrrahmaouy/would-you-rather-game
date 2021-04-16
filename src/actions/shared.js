import { hideLoading, showLoading } from "react-redux-loading-bar"
import { _getQuestions, _getUsers } from "../utils/_DATA"
import { setAuthedUser } from "./authedUser" //for develop
import { receiveQuests } from "./quests"
import { receiveUsers } from "./users"

const authedID = 'tylermcginnis'  //for develop


export const handleInitialData = () => {
  return dispatch => {
    return _getUsers()
    .then(users => {
      dispatch(receiveUsers(users))
      dispatch(setAuthedUser(authedID)) //for develop
    })
  }
}

export const handleHomeData = () => {
  return dispatch => {
    dispatch(showLoading())
    return _getQuestions()
      .then(quests => {
        dispatch(receiveQuests(quests))
        dispatch(hideLoading())
      })
  }
}