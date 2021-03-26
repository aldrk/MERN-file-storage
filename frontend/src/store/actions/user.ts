import {
  registerUserRequestAction,
  UserActionsType,
  registerUserFailAction,
  registerUserSuccessAction,
  loginUserFailAction,
  loginUserSuccessAction,
  loginUserRequestAction,
  User, logOutAction, authAction
} from "store/interfaces/user"

export const registerUserRequestAC = (): registerUserRequestAction => ({type: UserActionsType.REGISTER_USER_REQUEST})
export const registerUserSuccessAC = (): registerUserSuccessAction => ({type: UserActionsType.REGISTER_USER_SUCCESS})
export const registerUserFailAC = (): registerUserFailAction => ({type: UserActionsType.REGISTER_USER_FAIL})

export const loginUserRequestAC = (): loginUserRequestAction => ({type: UserActionsType.LOGIN_USER_REQUEST})
export const loginUserSuccessAC = (payload: User): loginUserSuccessAction => ({type: UserActionsType.LOGIN_USER_SUCCESS, payload})
export const loginUserFailAC = (): loginUserFailAction => ({type: UserActionsType.LOGIN_USER_FAIL})

export const logOutAC = (): logOutAction => ({type: UserActionsType.LOG_OUT})
export const authAC = (payload: User): authAction => ({type: UserActionsType.AUTH, payload})