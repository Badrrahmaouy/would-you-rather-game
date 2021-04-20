import { hideLoading, showLoading } from "react-redux-loading-bar"
import { getQuestions, handleAllData } from "../utils/helpers"
//import { setAuthedUser } from "./authedUser" //for develop
import { receiveQuests } from "./quests"
import { receiveUsers } from "./users"

//const authedID = 'tylermcginnis'  //for develop


export const handleInitialData = () => {
  return dispatch => {
    return handleAllData()
      .then(({users, quests}) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuests(quests))
      //dispatch(setAuthedUser(authedID)) //for develop
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