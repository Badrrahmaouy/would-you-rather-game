import { RECEIVE_USERS, SAVE_ANSWER, SAVE_NEW_QUEST } from "../actions/users"

const users = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
      case SAVE_ANSWER:
        const { id, authedUser, selectedOption } = action

        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [id]: selectedOption
            }
          }
        }
      case SAVE_NEW_QUEST:
        const { newQuest } = action
      
        return {
          ...state,
          [newQuest.author]: {
            ...state[newQuest.author],
            questions: [...state[newQuest.author].questions, newQuest.id]
          }
        }
      default:
        return state
  }
}

export default users