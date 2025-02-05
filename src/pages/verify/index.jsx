import React, { useEffect, useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../service';
const App = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(180);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    if (timerRunning && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); 
    }
    if (countdown === 0) {
      setTimerRunning(false); 
    }
  }, [countdown, timerRunning]);

  const onFinish = async (values) => {
    try {
      const res = await auth.verify(values)
      if (res.status === 200) {
        navigate('/login')
        console.log(res);
      }

    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className='px-5 my-20'>
      <h2 className='mb-5 text-2xl font-bold'>Verify email</h2>
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
        <div style={{ marginBottom: '10px', textAlign: 'center' }}>
          {timerRunning
            ? <span>Time remaining: {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}</span>
            : <span>Time's up! Please request a new code.</span>}
        </div>
        <Form.Item
          name="otp"
          label="Enter verify code"
          hasFeedback validateStatus="success">
          <Input.OTP />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" disabled={!timerRunning}>
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;