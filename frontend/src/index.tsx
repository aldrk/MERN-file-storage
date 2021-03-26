import React from "react"
import ReactDOM from "react-dom"
import Index from "./app/sections/App"
import { Provider } from "react-redux"
import { store } from "./store/store"

import "styles/index.scss"

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
)