import { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'

import "./App.scss"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
