// import api from './services/api';
import { Menu } from 'antd';
import './components/buttons/ButtonPrimary';
import { Row, Col } from 'antd';

import { PageHeader, Button } from 'antd';

// import que foram copiados pro componente 
// import { Divider, Space } from 'antd';
import React from 'react';
// import { Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
import { Layout} from 'antd';


import { Tag } from 'antd';


//import { useState } from 'react';

// import { PoweroffOutlined } from '@ant-design/icons';
import './global.css';


const { Footer } = Layout;







function App() {
 // const [size] = useState(8);
  return (
    <div style={{ width: 1200, margin: '40px auto' }}>
       <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={true}
      onBack={() => window.history.back()}
      title="Back"
      subTitle="This is a subtitle"
    


      extra={[
        <Button theme= "dark">any rank</Button>,
        <Button theme="dark">all divisions</Button>,
        <Button key="3">Search</Button>,
        <Button key="2">Search</Button>,
        <Button key="1" type="primary">,
          Clear
        </Button>,
        <>
      
          <Tag color="#f50">#f50</Tag>
        

        </>
      ]}
    >
    
    </PageHeader>
  </div>
   
    
      <>
        <Row gutter={[16, 16 ]}>
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