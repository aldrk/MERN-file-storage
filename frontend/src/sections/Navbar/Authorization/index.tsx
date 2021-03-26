import React, {FC} from "react"
import {Button} from "@material-ui/core"

import style from "./style.module.scss"

const Authorization: FC = () => {
  return (
    <div className={style.wrapper}>
      <Button color="secondary">Login</Button>
      <Button color="secondary">Sing UP</Button>
    </div>
  )
}

export default Authorization