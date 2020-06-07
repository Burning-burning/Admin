import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {adminRouter} from '../../routes/index'
import logo from './logo.png'
import {withRouter} from 'react-router-dom'
import './index.less'
const { Header, Content, Sider } = Layout;
const menus = adminRouter.filter(route=>route.isNav===true)
@withRouter
class Frame extends Component {
  handleClick=({key})=>{
    this.props.history.push(key)
  }
  render() {
    return (
      <Layout style={{height: '100%'}}>
      <Header className="header qf-header">
        <div className="logo qf-logo">
          <img src = {logo} alt="logo"/>
        </div>
      
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            selectedKeys={[this.props.location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            onClick = {this.handleClick}
          >
            {
              menus.map(route=>{
                
                return <Menu.Item key={route.pathname} >{route.title}</Menu.Item>
              })
            }

       
         
          </Menu>
        </Sider>
        <Layout style={{ padding: '16px 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: 'white'
            }}
          >
          {this.props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )
  }
}
export default Frame