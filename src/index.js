import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {mainRouter} from './routes/index'
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd'

import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
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
  </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
)