import React from "react"
import ReactDOM from "react-dom"
import App from "./app/sections/App"
import {Provider} from "react-redux"
import {store} from "./store/store"
import {MuiThemeProvider} from "@material-ui/core"
import theme from "./theme"
import {ToastProvider} from "react-toast-notifications"

import "styles/index.scss"

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider autoDismiss={true} autoDismissTimeout={4500}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
)