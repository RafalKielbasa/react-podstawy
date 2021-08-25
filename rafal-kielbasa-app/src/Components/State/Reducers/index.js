import { combineReducers } from "redux"
import counterReducer from "./counterReducer"
import userDataReducer from "./userDataReducer"

const reducers = combineReducers({
  counter: counterReducer,
  userData: userDataReducer,
})

export default reducers
