import React, {useEffect} from "react"
import Navbar from "../Navbar"
import {makeStyles} from "@material-ui/core"
import {BrowserRouter,  Switch, Route} from "react-router-dom"
import Registration from "../Auth"
import Container from "../../components/Container"
import styleScss from "./style.module.scss"
import { useDispatch } from "react-redux"
import { authUserWithToken } from "store/dispatchers/user"

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily
  }
}))

const App = () => {
  const style = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authUserWithToken())
  }, [])

  return (
    <BrowserRouter>
      <div className={style.root}>
        <Navbar />
        <Container className={styleScss.layout}>
          <Switch>
            <Route path="/registration" component={Registration} />
          </Switch>
          <Switch>
            <Route path="/login" component={Registration} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App