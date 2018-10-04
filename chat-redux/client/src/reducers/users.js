import initialState from '../constants/initialState'
import types from '../actions/types'

const users = (state = initialState.users, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, action.payload]
    case types.REMOVE_USER:
      return state
    default:
      return state
  }
}

export default users
