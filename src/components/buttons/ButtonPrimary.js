import React from 'react';
import { Button } from 'antd';
import { Divider, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './../../App.js';


import { Menu } from 'antd';
import { useState } from 'react';

const { Header } = Menu;

export default function ButtonPrimary() {
    const [size] = useState(8);
    return (
        <div style={{ width: 1200, margin: '40px auto' }}>
        <div className="App"> 
        <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['100']}>
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
        >
          Search
        </Button>
        <Divider type="vertical" />
        <Button href="#">Clear</Button>
        </Space>
 
        </Menu>
        
      
    </Header>
    </div>
    </div>
    );
}