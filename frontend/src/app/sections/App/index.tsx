import React, {useEffect} from "react"
import Navbar from "../Navbar"
import {makeStyles} from "@material-ui/core"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import Registration from "../Auth"
import Container from "app/components/Container"
import styleScss from "./style.module.scss"
import {useDispatch, useSelector} from "react-redux"
import {authUserWithToken, logOut} from "store/dispatchers/user"
import {State} from "store/store"
import Disk from "../Disk"
import {useToasts} from "react-toast-notifications"
import {useUpdateEffect} from "react-use"

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily
  }
}))

const App = () => {
  const style = useStyles()
  const dispatch = useDispatch()
  const {addToast} = useToasts()

  const {isAuth} = useSelector((state: State) => state.user)
  const {error} = useSelector((state: State) => state.files)

  useEffect(() => {
    if (error !== null) {
      addToast("Server Error, please try later", {appearance: "error"})
    }
  }, [error])

  useEffect(() => {
    dispatch(authUserWithToken())
  }, [])

  useUpdateEffect(() => {
    if (!isAuth) dispatch(logOut())
  }, [isAuth])

  return (
    <BrowserRouter>
      <div className={style.root}>
        <Navbar/>
        <Container className={styleScss.layout}>
          {isAuth
            ? <Switch>
              <Route exact path="/" component={Disk}/>
              <Redirect to="/"/>
            </Switch>
            : <Switch>
              <Route path="/registration" component={Registration}/>
              <Route path="/login" component={Registration}/>
              <Redirect to="/login"/>
            </Switch>
          }
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App