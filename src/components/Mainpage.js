
import { Breadcrumb, Layout, theme } from 'antd';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import LeftMain from './LeftMain';
const { Content, Sider } = Layout;


const Mainpage = () => {
  const [leftMessage,setLeftMessage] = useState([])
  function callBackLeftMessage(obj){
    setLeftMessage(obj)
    return 
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  useEffect(() => {
   axios({
    method:'POST',
    url:'https://menu-upup.azurewebsites.net/api/login',
    data:{"name":"桃橘","password":"test"}
   }).then(response=>{
    console.log(response)
   })
  })
  
// const data = {"name":"桃橘","password":"test"}
// fetch('https://menu-upup.azurewebsites.net/api/login', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(),
// })
// .then(response => response.json(data))
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
  return (
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          {/* 左边栏 */}
          <LeftMain callBackLeftMessage={callBackLeftMessage}/>

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
            <Breadcrumb.Item>{leftMessage.length>0?leftMessage[1]:" "}</Breadcrumb.Item>
            <Breadcrumb.Item>{leftMessage.length>0?leftMessage[0]:" "}</Breadcrumb.Item>
          
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
