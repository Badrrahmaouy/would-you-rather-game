import { saveNewQuest, saveQuestionAnswer } from "../utils/helpers"

export const RECEIVE_QUESTS = 'RECEIVE_QUEST'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_NEW_QUEST = 'SAVE_NEW_QUEST'

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

export const handleSaveAnswer = answer => {
  return dispatch => {
    dispatch(saveAnswer(answer))
    return saveQuestionAnswer(answer)
      .catch(e => {
        console.warn('Error while submitting answer', e)
      })
  }
}

const saveQuest = newQuest => ({
  type: SAVE_NEW_QUEST,
  newQuest
})

export const handleSaveQuest = (optionOne, optionTwo) => {
  return (dispatch, getState) => {
    const authedUser = getState()
    const user = authedUser.authedUser

    return saveNewQuest({
      optionOne,
      optionTwo,
      user
    })
    .then(quest => {
      dispatch(saveQuest(quest))
    })
  }
}