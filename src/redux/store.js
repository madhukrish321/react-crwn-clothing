import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const middleWares = [logger]

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(...middleWares))

export default store



