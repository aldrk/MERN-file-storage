import React from "react"
import Navbar from "../Navbar"
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily
  }
}))

const App = () => {
  const style = useStyles()

  return (
    <div className={style.root}>
      <Navbar />
    </div>
  )
}

export default App