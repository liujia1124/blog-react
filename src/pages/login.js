
import React from 'react';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';





function onFinish (values) {
    console.log(values)
  if(values.username==='123456'&& values.password ==='222'){
    console.log(1);
    //加入全局组件参数
    //加入本地存储
    localStorage.setItem ("logined", 1)
    //跳转
    //const navigate = useNavigate();
    return <Navigate to={'/home'}  replace/>;   
   return;
    
  }else{
    console.log(2);
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
    />
    function onClose(){

    }
    return ;
  }
};
function login(){
  console.log(666)
}



const Login = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label="记住我">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label="提交">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default Login;