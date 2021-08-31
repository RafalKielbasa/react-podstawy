import { combineReducers } from "redux"
import counterReducer from "./counterReducer"
import userDataReducer from "./userDataReducer"
import stoperReducer from "./stoperReducer"

const reducers = combineReducers({
  counter: counterReducer,
  userData: userDataReducer,
  stoper: stoperReducer,
})

export default reducers
