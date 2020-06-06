import React from 'react';
import { Button } from 'antd';
import {Component} from 'react'



const testHOC = (WrappedComponent)=>{
  return class HOCComponent extends Component{
    render(){
      return (
        <>
          <WrappedComponent />
          <div>这是装饰器模式写法</div>
        </>
      )
    }
}
}

@testHOC
class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">xxx</Button>
      </div>
    )
  }
}


export default App;