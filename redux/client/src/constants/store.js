import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import initialState from './initialState'
import rootReducer from '../reducers'

const middleWareInput = [thunk]

const middleware = compose (
  applyMiddleware(...middleWareInput)
  // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store  = createStore (
  rootReducer
  , initialState
  , middleware
)

export default store
