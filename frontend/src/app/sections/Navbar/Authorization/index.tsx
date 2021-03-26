import React, {FC} from "react"
import {Button} from "@material-ui/core"
import { useHistory } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { State } from "store/store"
import { logOut } from "store/dispatchers/user"

import style from "./style.module.scss"

const Authorization: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { isAuth } = useSelector((state: State) => state.user)

  return (
    <div className={style.wrapper}>
      {!isAuth && <Button onClick={() => history.push("/login")} color="secondary">Login</Button>}
      {! isAuth && <Button onClick={() => history.push("/registration")} color="secondary">Sing UP</Button>}
      {isAuth && <Button onClick={() => dispatch(logOut())} color="secondary">Log Out</Button>}
    </div>
  )
}

export default Authorization