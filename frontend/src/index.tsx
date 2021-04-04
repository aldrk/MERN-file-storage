import React from "react"
import ReactDOM from "react-dom"
import Index from "./app/sections/App"
import { Provider } from "react-redux"
import { store } from "./store/store"
import {MuiThemeProvider} from "@material-ui/core"
import theme from "./theme"

import "styles/index.scss"

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Index />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
)