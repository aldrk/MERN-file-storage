import React, {ChangeEvent, FC, useState} from "react"
import Input from "../../components/Input"
import {Box, Button} from "@material-ui/core"
import {Authorization} from "store/interfaces/user"
import {useDispatch} from "react-redux"
import {useLocation} from "react-router-dom"

import style from "./style.module.scss"
import {authUser} from "store/dispatchers/user"

const Registration: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [authorizationObject, setAuthorizationObject] = useState<Authorization>({email: "", password: ""})

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
    dispatch(authUser(authorizationObject, isLoginMethod))
  }

  const onRegisterClickHandler = () => {
    dispatch(authUser(authorizationObject, isLoginMethod))
  }

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
        onClick={isLoginMethod ? onLoginClickHandler : onRegisterClickHandler}
        className={style.button}
        variant="contained">{isLoginMethod ? "Login" : "Sing Up"}
      </Button>
    </Box>
  )
}

export default Registration