import types from './types'

export const addMessage = payload => ({
  type: types.ADD_MESSAGE,
  payload
})

export const updateUsers = payload => ({
  type: types.UPDATE_USERS,
  payload
})
