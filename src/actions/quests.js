import { saveQuestionAnswer } from "../utils/API"

export const RECEIVE_QUESTS = 'RECEIVE_QUEST'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export const receiveQuests = quests => ({
  type: RECEIVE_QUESTS,
  quests
})

const saveAnswer = ({ id, authedUser, selectedOption }) => ({
  type: SAVE_ANSWER,
  id,
  authedUser,
  selectedOption
})

export const handleSaveAnswer = info => {
  console.log(info)
  return dispatch => {
    dispatch(saveAnswer(info))
    return saveQuestionAnswer(info)
      .catch(e => {
        console.warn('Error while submitting answer', e)
      })
  }
}

