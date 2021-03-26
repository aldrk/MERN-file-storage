import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import userReducer from "./reducers/user"
import filesReducer from "./reducers/files"
import {UserState} from "./interfaces/user"

export type State = {
  user: UserState
  files: any
}

const rootReducer = combineReducers<State>({
  user: userReducer,
  files: filesReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))