import { _getQuestions, _getUsers } from "./_DATA"

export const getInitialData = () => (
  Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, quests]) => ({
    users,
    quests
  }))
)