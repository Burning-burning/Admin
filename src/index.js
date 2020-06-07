import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {mainRouter} from './routes/index'
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/admin' render={(routerProps)=>{
        return <App />
      }} />
      {mainRouter.map(route=>{
        return <Route path={route.pathname} component={route.component} />
      })}
      <Redirect to='/admin' from ='/' exact />
      <Redirect to='/404' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)