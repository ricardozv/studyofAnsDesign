import React from 'react';
import {Button} from 'antd';
import './App.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App() {
  return (
    <div className="App"> 
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Taxonomies</Menu.Item>
        <Menu.Item key="2">API</Menu.Item>
        <Menu.Item key="3">Documentation</Menu.Item>
      </Menu>
    </Header>
    </div>
    
  );
}

export default App;