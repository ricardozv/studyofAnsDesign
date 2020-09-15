// import api from './services/api';
import './components/buttons/ButtonPrimary';
import { Row} from 'antd';

import { PageHeader, Button } from 'antd';

import React from 'react';
import { Layout} from 'antd';


import { Tag } from 'antd';
import './global.css';




const { Footer, Content } = Layout;


function App() {

  return (
    <div style={{ width: 1200, margin: '40px auto' }}>
       <div className="site-page-header-ghost-wrapper">
    <PageHeader style={{ 
       background: '#0000FF',
       width: 1200,
       padding: 20

    }}
      ghost={true}
      onBack={() => window.history.back()}
      title="Back"
      subTitle="This is a subtitle"
      extra={[
        <Button theme= "dark">any rank</Button>,
        <Button theme="dark">all divisions</Button>,
        <Button key="3">Search</Button>,
        <Button key="2">Search</Button>,
        <Button key="1" type="primary">
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

      <Content style={{ margin: '10px 50px 10px 6px', background:'#0000FF' }}>
            <div className="site-layout-background" style={{ padding: 20, minHeight: 50 }}>
              Bill is a cat.
            kkkkkkkkkk
            </div>
          </Content>

          <Content style={{ margin: '10px 50px 10px 6px', background:'#0000FF' }}>
            <div className="site-layout-background" style={{ padding: 20, minHeight: 50 }}>
              Bill is a cat.
            kkkkkkkkkk
            </div>
          </Content>


        <Row gutter={[16, 16 ]}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

        <Row>
          <Col style={{ 
            background:'#0000FF',
            margin: '10px 50px 10px 6px',
            padding: 20, 
            minHeight: 50
        
        
        }} span={6}>col-6</Col>
         
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
                background: '#0000FF',
                width: 1200,
                padding: 8
              }}>
                Footer</Footer>
        </Layout>


       
       
    </>
</div>
   
  );
}

export default App;