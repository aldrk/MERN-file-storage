import {Authorization} from "../interfaces/user"
import {Dispatch} from "redux"
import API from "../../lib/api"
import config from "config"
import * as actions from "store/actions/user"
import {setCurrentDirAC} from "../actions/files"

export const authUserWithData = (authData: Authorization, isLoginMethod: boolean) => (dispatch: Dispatch) => {
  const {email, password} = authData

  isLoginMethod ? dispatch(actions.loginUserRequestAC()) : dispatch(actions.registerUserRequestAC())
  API.post(isLoginMethod  ? config.paths.login : config.paths.registration, {email, password})
    .then((data) => {
      if (isLoginMethod) {
        const {user, token} = data.data

        localStorage.setItem("token", token)
        dispatch(actions.loginUserSuccessAC(user))
      }

      dispatch(actions.registerUserSuccessAC())
    })
    .catch((data) => {
      isLoginMethod ? dispatch(actions.loginUserFailAC()) : dispatch(actions.registerUserFailAC())
    })
}

export const logOut = () => (dispatch: Dispatch) => {
  dispatch(actions.logOutAC())
}

export const authUserWithToken = () => (dispatch: Dispatch) => {
  const token = localStorage.getItem("token")
  API.get(config.paths.auth, {headers: {Authorization: `Bearer ${token}`}})
    .then((data) => {
      const {user, token} = data.data

      dispatch(actions.authAC(user))
      dispatch(setCurrentDirAC(user.id))
      localStorage.setItem("token", token)
    })
    .catch(() => {
      localStorage.removeItem("token")
    })
}