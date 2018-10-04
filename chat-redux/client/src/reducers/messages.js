import types from '../actions/types'

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return [...state, action.payload]
    default:
      return state
  }
}

export default messages
