// import api from './services/api';
import { Menu } from 'antd';

import { Row, Col } from 'antd';

import { Divider, Space } from 'antd';
import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Layout} from 'antd';



import { useState } from 'react';

// import { PoweroffOutlined } from '@ant-design/icons';
import './global.css';


const { Header, Footer } = Layout;


// tentando colocar reload nos butões 
/* class App extends React.Component {
  state = {
    loadings: [],
  };
*/

// Verficar o reproveitamento das folhas de stylo dos cartões



function App() {
 // const { loadings } = this.state; colocar reload nos butões 
 const [size] = useState(8);
  return (
    <div className="App"> 
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['100']}>
      <Divider type="vertical"/>

      
        <Space size={size}>
       
        <Button theme= "dark">Taxonomies</Button>
        <Button theme="dark">Api</Button>
        <Button theme="dark">Documentasion</Button>
        <Divider type="vertical" />
        </Space>

        <Space>
        <Divider type="vertical" />
        <Button 
        type="primary" 
        icon={<SearchOutlined />}
        //loading={loadings[1]} tentativa de colocar reload no botão
        onClick={() => this.enterLoading(1)}
        >
          Search
        </Button>
        <Divider type="vertical" />
        <Button href="#">Clear</Button>
        </Space>

    
      </Menu>
      
    </Header>
       
        <>
        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>


        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>


        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>


        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>


        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

     

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