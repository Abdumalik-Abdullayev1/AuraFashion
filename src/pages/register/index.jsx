import React from 'react';
import { LockOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../service';
const App = () => {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      const res = await auth.sign_up(values)
      console.log(res);
      if (res.status === 201) {
        navigate('/verify')
      }

    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className='px-5 xl:px-24 my-20 lg:mt-28'>
      <div>

      </div>
      <div>
        <h2 className='mb-5 text-2xl font-bold'>Register</h2>
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
            name="first_name"
            rules={[
              {
                required: true,
                message: 'Please input your First name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="last_name"
            rules={[
              {
                required: true,
                message: 'Please input your Last name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Last name" />
          </Form.Item>
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
            name="phone_number"
            rules={[
              {
                required: true,
                message: 'Please input your Phone number!',
              },
            ]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Phone number" />
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
              <p onClick={() => navigate('/login')}>Forgot password</p>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
            or <span onClick={() => navigate('/login')}>Already have an account</span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default App;