import { _getQuestions, _getUsers, _saveQuestionAnswer } from "./_DATA"

export const getInitialData = () => (
  Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, quests]) => ({
    users,
    quests
  }))
)

export const formatQuest = (quest, authedUser, author) => {
  const { id, optionOne, optionTwo } = quest
  const { name, avatarURL } = author
  
  return {
    name,
    id,
    avatar: avatarURL,
    answers: optionOne['votes'].length + optionTwo['votes'].length,
    textOne: optionOne['text'],
    textTwo: optionTwo['text'],
    answeredOne: optionOne['votes'].includes(authedUser),
    answeredTwo: optionTwo['votes'].includes(authedUser),
    answersOne: optionOne['votes'].length,
    answersTwo: optionTwo['votes'].length,
  }
}

export const saveQuestionAnswer = info => {
  return _saveQuestionAnswer(info)
}