import { hideLoading, showLoading } from "react-redux-loading-bar"
import { getQuestions, getUsers } from "../utils/API"
import { setAuthedUser } from "./authedUser" //for develop
import { receiveQuests } from "./quests"
import { receiveUsers } from "./users"

const authedID = 'tylermcginnis'  //for develop


export const handleInitialData = () => {
  return dispatch => {
    return getUsers()
    .then(users => {
      dispatch(receiveUsers(users))
      dispatch(setAuthedUser(authedID)) //for develop
    })
  }
}

export const handleHomeData = () => {
  return dispatch => {
    dispatch(showLoading())
    return getQuestions()
      .then(quests => {
        dispatch(receiveQuests(quests))
        dispatch(hideLoading())
      })
  }
}