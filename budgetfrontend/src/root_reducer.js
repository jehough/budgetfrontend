import {combineReducers} from 'redux'
import userReducer from './ducks/users/reducers.js'

const rootReducer = combineReducers({
  
  user: userReducer
})

export default rootReducer