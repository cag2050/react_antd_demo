import React from 'react'
import {Layout, Menu, Icon} from 'antd';
import {
  // BrowserRouter as Router,
  Route,
  // Switch,
  Link
} from 'react-router-dom'
// 按需加载
import async from '../async'
let ButtonDemo = async(() => import("./ButtonDemo"));
let InputDemo = async(() => import("./InputDemo"));

// import ButtonDemo from './ButtonDemo'
// import InputDemo from './InputDemo'

const {Header, Sider, Content} = Layout;

class MyLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user"/>
              <span>button</span>
              <Link to='/'></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <span>input</span>
              <Link to='/input'></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', paddingLeft: '20px'}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
            <Route path='/' exact component={ButtonDemo}></Route>
            <Route path='/input' exact component={InputDemo}></Route>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MyLayout
