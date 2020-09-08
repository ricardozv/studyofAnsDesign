// import api from './services/api';

import { Divider } from 'antd';
import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import './global.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App"> 
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Divider type="vertical" />
        <Button type= "primary">Taxonomies</Button>
        <Divider type="vertical" />
        <Button type="primary">Api</Button>
        <Divider type="vertical" />
        <Button type="primary">Documentasion</Button>
        
        <Divider type="vertical" />
        <Button type="primary">Primary Button</Button>
        <Divider type="vertical" />
        <Button>Default Button</Button>
        <Divider type="vertical" />
        <Button type="dashed">Dashed Button</Button>
        

        <Divider type="vertical" />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Divider type="vertical" />
        <Button href="#">Clear</Button>
      

    
      </Menu>
    </Header>
       
        <>
        <Layout>
            <Content>Content</Content>
        </Layout>

            <Layout>
                <Content>Content</Content>
            </Layout>

                <Layout>
                  <Content>Content</Content>
                </Layout>

                    <Layout>
                      <Content>Content</Content>
                    </Layout>

                        <Layout>
                            <Content>Content</Content>
                        </Layout>

                            <Layout>
                              <Content>Content</Content>
                            </Layout>

                                <Layout>
                                  <Content>Content</Content>
                                </Layout>

                                    <Layout>
                                        <Content>Content</Content>
                                    </Layout>

                                        <Layout>
                                          <Content>Content</Content>
                                        </Layout>

                                            <Layout>
                                              <Content>Content</Content>
                                            </Layout>

                                              <Layout>
                                                  <Content>Content</Content>
                                              </Layout>
                                              
                                                  <Layout>
                                                    <Content>Content</Content>
                                                  </Layout>

                                                       <Layout>
                                                          <Content>Content</Content>
                                                       </Layout>

                                                  <Layout>
                                                    <Content>Content</Content>
                                                </Layout>

                                            <Layout>
                                              <Content>Content</Content>
                                            </Layout>

                                        <Layout>
                                        <Content>Content</Content>
                                     </Layout>

                                <Layout>
                                    <Content>Content</Content>
                                </Layout>
                                
                                    <Layout>
                                      <Content>Content</Content>
                                    </Layout>

                                       <Layout>
                                          <Content>Content</Content>
                                      </Layout>

                                    <Layout>
                                        <Content>Content</Content>
                                    </Layout>

                                <Layout>
                                  <Content>Content</Content>
                                </Layout>

                          <Layout>
                              <Content>Content</Content>
                           </Layout>

                      <Layout>
                          <Content>Content</Content>
                      </Layout>
            
                <Layout>
                  <Content>Content</Content>
                </Layout>

              <Footer>Footer</Footer>
        </>

    </div>
  
  );
}

export default App;