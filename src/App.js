// import api from './services/api';

import { Divider, Space, AutoComplete } from 'antd';
import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import './global.css';
import { Card } from 'antd';

// Verficar o reproveitamento das folhas de stylo dos cartões.
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App"> 
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Divider type="vertical" />
        <Space>
        <Button type= "primary">Taxonomies</Button>
        <Button type="primary">Api</Button>
        <Button type="primary">Documentasion</Button>
        <Divider type="vertical" />
        </Space>

        <Space>
        <Divider type="vertical" />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Divider type="vertical" />
        <Button href="#">Clear</Button>
        </Space>

    
      </Menu>
      
    </Header>
       
        <>

        
        <Card style={
          { 
            width: 1200,
            padding: 1
          
          }}>
           <p>Card content</p>
        </Card>
        <Card style={
          { 
            width: 1200,
            padding: 2
          
          }}>
            <p>Card content</p>
        </Card>
        <Card style={
          { 
            width: 1200,
            padding: 2
          
          }}>
            <p>Card content</p>
        </Card>
        <Card style={
          { 
            width: 1200,
            padding: 2
          
          }}>
            <p>Card content</p>
        </Card>
        <Card style={
          { 
            width: 1200,
            padding: 2
          
          }}>
            <p>Card content</p>
        </Card>
        <Card style={
          { 
            width: 1200,
            padding: 2
          
          }}>
            <p>Card content</p>
        </Card>

        <Card style={
          { 
            width: 1200,
            padding: 2
          
          }}>
            <p>Card content</p>
        </Card>
        <Layout>
              <Footer style={{
                width: 1200,
                padding: 2

              }}>Footer</Footer>
        </Layout>


       
       
        </>

    </div>
  
  );
}

export default App;