import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const {  Content, Sider } = Layout;

const mune = ['素菜',"huncai","keke","dheuifgreu"]
const items2 = [ NotificationOutlined, NotificationOutlined, NotificationOutlined, NotificationOutlined].map((icon, index) => {
  return {
    key: mune[index],
    icon: React.createElement(icon),
    label: mune[index],
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = j;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const App = () => {
  return (
      <Layout style={{}}>
        <Sider
          width="20%"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    
  );
};
export default App;
