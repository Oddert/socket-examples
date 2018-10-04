import initialState from '../constants/initialState'
import types from '../actions/types'

const users = (state = initialState.users, action) => {
  switch (action.type) {
    case types.UPDATE_USERS:
      return action.payload
    default:
      return state
  }
}

export default users
