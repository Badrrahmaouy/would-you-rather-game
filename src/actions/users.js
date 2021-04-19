export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_NEW_QUEST = 'SAVE_NEW_QUEST'

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const saveAnswerToUser = ({ id, authedUser, selectedOption}) => ({
  type: SAVE_ANSWER,
  id,
  authedUser,
  selectedOption
})

export const saveQuestToUser = newQuest => ({
  type: SAVE_NEW_QUEST,
  newQuest
})