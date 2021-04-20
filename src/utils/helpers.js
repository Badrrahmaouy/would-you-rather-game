import { 
  _getQuestions, 
  _getUsers, 
  _saveQuestion, 
  _saveQuestionAnswer 
} from "./_DATA"

export const handleAllData = () => {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, quests]) => ({
    users,
    quests
  }))
}

export const getUsers = () => {
  return _getUsers()
}

export const getQuestions = () => {
  return _getQuestions()
}

export const saveQuestionAnswer = answer => {
  return _saveQuestionAnswer(answer)
}

export const saveNewQuest = quest => {
  return _saveQuestion(quest)
}