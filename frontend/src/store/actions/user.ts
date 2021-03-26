import {
  registerUserRequestAction,
  userActionsType,
  registerUserFailAction,
  registerUserSuccessAction,
  loginUserFailAction,
  loginUserSuccessAction,
  loginUserRequestAction
} from "store/interfaces/user"

export const registerUserRequestAC = (): registerUserRequestAction => ({type: userActionsType.REGISTER_USER_REQUEST})
export const registerUserSuccessAC = (): registerUserSuccessAction => ({type: userActionsType.REGISTER_USER_SUCCESS})
export const registerUserFailAC = (): registerUserFailAction => ({type: userActionsType.REGISTER_USER_FAIL})

export const loginUserRequestAC = (): loginUserRequestAction => ({type: userActionsType.LOGIN_USER_REQUEST})
export const loginUserSuccessAC = (): loginUserSuccessAction => ({type: userActionsType.LOGIN_USER_SUCCESS})
export const loginUserFailAC = (): loginUserFailAction => ({type: userActionsType.LOGIN_USER_FAIL})