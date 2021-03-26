import {Authorization} from "../interfaces/user"
import {Dispatch} from "redux"
import API from "../../lib/api"
import config from "config"
import * as actions from "store/actions/user"

export const authUser = (authData: Authorization, isLoginMethod: boolean) => (dispatch: Dispatch) => {
  const {email, password} = authData

  dispatch(actions.registerUserRequestAC())
  API.post(isLoginMethod  ? config.paths.login : config.paths.registration, {email, password})
    .then((data) => {
      alert(data)
      console.log(data)
    })
    .catch((data) => {
      alert(data)
      console.log(data)
    })
}