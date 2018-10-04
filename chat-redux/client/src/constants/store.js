import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import initialState from './initialState'
import rootReducer from '../reducers'

const middlewareInput = [thunk]

const middleware = compose (
  applyMiddleware(...middlewareInput)
  // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore (
  rootReducer
  , initialState
  , middleware
)

export default store
