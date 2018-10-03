import initialState from '../constants/initialState'
import types from '../actions/types'

const messages = (state = initialState.messages, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return [...state].concat(action.payload)
    default:
      return state
  }
}

export default messages
