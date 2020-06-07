import React from 'react';
import { Button } from 'antd';
import {Component} from 'react'
import {adminRouter} from './routes'
import {Switch, Route, Redirect} from 'react-router-dom'
import Frame from './components/Frame'



class App extends Component {
  render() {
    return (
     <Frame>
        <Switch>
        {adminRouter.map(route=>{
          return <Route exact={route.exact} path={route.pathname} render={(routerProps) => {
            return <route.component {...routerProps}/>
          }} />
        })}
       <Redirect to="/admin/dashboard" from ='/admin' exact/>
       <Redirect to='/404' />
      </Switch>
     </Frame>
    )
  }
}


export default App;