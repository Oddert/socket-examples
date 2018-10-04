import types from './types'

export const addMessage = payload => ({
  type: types.ADD_MESSAGE,
  payload
})

export const addUser = payload => ({
  type: types.ADD_USER,
  payload
})

export const removeUser = payload => ({
  type: types.REMOVE_USER,
  payload
})
