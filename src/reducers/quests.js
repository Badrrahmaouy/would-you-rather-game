import { RECEIVE_QUESTS, SAVE_ANSWER, SAVE_NEW_QUEST } from "../actions/quests"

const quests = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_QUESTS:
      return {
        ...state,
        ...action.quests
      }
    case SAVE_ANSWER:
      const { id, authedUser, selectedOption } = action

      return {
        ...state,
        [id]: {
          ...state[id],
          [selectedOption]: {
            ...state[id][selectedOption],
            votes: state[id][selectedOption].votes.concat([authedUser])
          }
        }
      }
      case SAVE_NEW_QUEST:
        const { newQuest } = action

        return {
          ...state,
          [newQuest.id]: newQuest
        }
    default:
      return state
  }
}

export default quests