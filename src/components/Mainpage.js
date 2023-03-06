
import { Breadcrumb, Layout, theme } from 'antd';
import React from 'react';
import LeftMain from './LeftMain';
const { Content, Sider } = Layout;


const Mainpage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          {/* 左边栏 */}
          <LeftMain/>

        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          {/* 该页面所在 */}
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {/* 具体情况 */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
   
  );
};
export default Mainpage;
