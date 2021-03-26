export type UserState = {
  user: User | null,
  isAuth: boolean
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

export enum userActionsType {
  REGISTER_USER_REQUEST= "REGISTER_USER_REQUEST",
  REGISTER_USER_SUCCESS= "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAIL= "REGISTER_USER_FAIL",

  LOGIN_USER_REQUEST= "LOGIN_USER_REQUEST",
  LOGIN_USER_SUCCESS= "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL= "LOGIN_USER_FAIL",
}

export type registerUserRequestAction = {
  type: userActionsType.REGISTER_USER_REQUEST,
}

export type registerUserSuccessAction = {
  type: userActionsType.REGISTER_USER_SUCCESS
}

export type registerUserFailAction = {
  type: userActionsType.REGISTER_USER_FAIL
}

export type loginUserRequestAction = {
  type: userActionsType.LOGIN_USER_REQUEST,
}

export type loginUserSuccessAction = {
  type: userActionsType.LOGIN_USER_SUCCESS
}

export type loginUserFailAction = {
  type: userActionsType.LOGIN_USER_FAIL
}

export type UserAction = registerUserRequestAction | registerUserSuccessAction | registerUserFailAction |
  loginUserRequestAction | loginUserSuccessAction | loginUserFailAction