export type UserState = {
  user: User | null,
  isAuth: boolean
  isRegisterSuccess: boolean
  isLoading: boolean
  isError: boolean
}

export type User = {
  id: string
  email: string
  diskSpace: number
  usedSpace: number
  avatar: string
}

export type Authorization = {
  email: string
  password: string
}

export enum UserActionsType {
  REGISTER_USER_REQUEST= "REGISTER_USER_REQUEST",
  REGISTER_USER_SUCCESS= "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAIL= "REGISTER_USER_FAIL",

  LOGIN_USER_REQUEST= "LOGIN_USER_REQUEST",
  LOGIN_USER_SUCCESS= "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL= "LOGIN_USER_FAIL",

  LOG_OUT = "LOG_OUT",
  AUTH = "AUTH"
}

export type registerUserRequestAction = {
  type: UserActionsType.REGISTER_USER_REQUEST,
}

export type registerUserSuccessAction = {
  type: UserActionsType.REGISTER_USER_SUCCESS
}

export type registerUserFailAction = {
  type: UserActionsType.REGISTER_USER_FAIL
}

export type loginUserRequestAction = {
  type: UserActionsType.LOGIN_USER_REQUEST,
}

export type loginUserSuccessAction = {
  type: UserActionsType.LOGIN_USER_SUCCESS
  payload: User
}

export type loginUserFailAction = {
  type: UserActionsType.LOGIN_USER_FAIL
}

export type logOutAction = {
  type: UserActionsType.LOG_OUT
}

export type authAction = {
  type: UserActionsType.AUTH
  payload: User
}

export type UserActions = registerUserRequestAction | registerUserSuccessAction | registerUserFailAction |
  loginUserRequestAction | loginUserSuccessAction | loginUserFailAction | logOutAction | authAction