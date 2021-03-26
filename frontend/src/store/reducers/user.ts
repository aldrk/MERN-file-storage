import {UserActions, UserActionsType, UserState} from "store/interfaces/user"

const defaultState: UserState = {
  isAuth: false,
  isRegisterSuccess: false,
  isLoading: false,
  isError: false,

  user: null
}

const userReducer = (state = defaultState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionsType.LOGIN_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }

    case UserActionsType.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        isLoading: false,
        isError: false
      }
    }

    case UserActionsType.LOGIN_USER_FAIL: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true
      }
    }

    case UserActionsType.REGISTER_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isRegisterSuccess: false,
        isError: false
      }
    }

    case UserActionsType.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isRegisterSuccess: true
      }
    }

    case UserActionsType.REGISTER_USER_FAIL: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isRegisterSuccess: false
      }
    }

    case UserActionsType.LOG_OUT: {
      localStorage.removeItem("token")

      return {
        ...state,
        isError: false,
        isLoading: false,
        isRegisterSuccess: false,
        isAuth: false,
        user: null,
      }
    }

    case UserActionsType.AUTH: {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        isLoading: false,
        isError: false
      }
    }
    default: return  state
  }
}

export default userReducer