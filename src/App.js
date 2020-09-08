import React from 'react';
import api from './services/api';

import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import './global.css';


const { SubMenu } = Menu;


const { Header, Footer, Sider, Content } = Layout;


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
       
        <>
        <Layout>
            <Content>Content</Content>
          </Layout>

            <Layout>
                <Layout>
                <Content>Content</Content>
            </Layout>
                
                <Content>Content</Content>

              <Footer>Footer</Footer>
        </Layout>




        </>
    </div>
  
  );
}

export default App;