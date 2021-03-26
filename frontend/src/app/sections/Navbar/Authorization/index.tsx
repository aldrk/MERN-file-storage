import React, {FC} from "react"
import {Button} from "@material-ui/core"

import style from "./style.module.scss"
import { useHistory } from "react-router-dom"

const Authorization: FC = () => {
  const history = useHistory()

  return (
    <div className={style.wrapper}>
      <Button onClick={() => history.push("/login")} color="secondary">Login</Button>
      <Button onClick={() => history.push("/registration")} color="secondary">Sing UP</Button>
    </div>
  )
}

export default Authorization