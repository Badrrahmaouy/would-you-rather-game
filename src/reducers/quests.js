import { RECEIVE_QUESTS } from "../actions/quests"

const quests = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_QUESTS:
      return {
        ...state,
        ...action.quests
      }
    default:
      return state
  }
}

export default quests