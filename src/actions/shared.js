import { hideLoading, showLoading } from "react-redux-loading-bar"
import { getInitialData } from "../utils/API"
import { setAuthedUser } from "./authedUser"
import { receiveQuests } from "./quests"
import { receiveUsers } from "./users"

const authedID = 'tylermcginnis'

export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, quests }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuests(quests))
        dispatch(setAuthedUser(authedID))
        dispatch(hideLoading())
      })
  }
}