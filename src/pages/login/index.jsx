import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../service';
const App = () => {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      const res = await auth.sign_in(values)
      if (res.status === 200) {
        navigate('/')
      }

    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className='px-5 my-20 lg:my-28'>
      <h2 className='mb-5 text-2xl font-bold'>Login</h2>
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email address!',
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email address" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="unchecked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <p onClick={() => navigate('/register')}>Forgot password</p>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <span onClick={() => navigate('/register')}>Register now!</span>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;