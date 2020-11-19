import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import userReducer from './user/user.reducer'

const middleWares = [logger]

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(...middleWares))

export default store



