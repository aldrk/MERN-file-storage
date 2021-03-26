import { UserState } from "../interfaces/user"

const defaultState: UserState = {
  isAuth: false,

  user: null
}

const userReducer = (state = defaultState, action: any): UserState => {
  switch (action.type) {
    default: return  state
  }
}

export default userReducer