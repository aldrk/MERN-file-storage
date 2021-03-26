import React from "react"
import {CloudCircleSharp} from "@material-ui/icons"

import style from "./style.module.scss"

const Logo = () => {
  return (
    <div className={style.logoWrapper}>
      <CloudCircleSharp fontSize="large" />
      <div>MERN Cloud</div>
    </div>
  )
}

export default Logo