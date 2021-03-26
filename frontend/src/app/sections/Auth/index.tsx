import React, {ChangeEvent, FC, useEffect, useState} from "react"
import Input from "../../components/Input"
import {Box, Button} from "@material-ui/core"
import {Authorization} from "store/interfaces/user"
import {useDispatch, useSelector} from "react-redux"
import {useHistory, useLocation} from "react-router-dom"

import style from "./style.module.scss"
import {authUserWithData} from "store/dispatchers/user"
import {State} from "../../../store/store";

const Registration: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()

  const [authorizationObject, setAuthorizationObject] = useState<Authorization>({email: "", password: ""})
  const {isRegisterSuccess, isLoading} = useSelector((state: State) => state.user)

  const isLoginMethod = location.pathname === "/login"

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthorizationObject({
      ...authorizationObject,
      email: event.target.value
    })
  }

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthorizationObject({
      ...authorizationObject,
      password: event.target.value
    })
  }

  const onLoginClickHandler = () => {
    dispatch(authUserWithData(authorizationObject, isLoginMethod))
  }

  const onRegisterClickHandler = () => {
    dispatch(authUserWithData(authorizationObject, isLoginMethod))
  }

  useEffect(() => {
    if (isRegisterSuccess) history.push("/login")
  }, [isRegisterSuccess])

  return (
    <Box boxShadow={3} className={style.wrapper}>
      <Input value={authorizationObject.email} onChange={emailChangeHandler} type="email" placeholder="Email"/>
      <Input
        value={authorizationObject.password}
        onChange={passwordChangeHandler}
        type="password"
        placeholder="Password"
      />
      <Button
        disabled={isLoading}
        onClick={isLoginMethod ? onLoginClickHandler : onRegisterClickHandler}
        className={style.button}
        variant="contained">{isLoginMethod ? "Login" : "Sing Up"}
      </Button>
    </Box>
  )
}

export default Registration