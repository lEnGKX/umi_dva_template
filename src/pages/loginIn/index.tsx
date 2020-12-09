import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'dva';

import HTTP from '@/services';

import { Form, Input, Button, Checkbox } from 'antd';

import styles from './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginIn = () => {
  const store = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);

  const onGetAllUsersInfo = () => {
    HTTP.users.getUsersInfo().then((res) => {
      setUserInfo(res);
    });
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    // HTTP.users.getUsersInfo().then((res) => {
    //   dispatch({ type: 'users/updateState', payload: { allUsersInfo: res } });
    // });

    dispatch({ type: 'users/fetchSaveAllUsersInfo' });
  }, []);

  return (
    <div className={styles.LoginIn}>
      <div className={styles.LoginInContainer}>
        <h1 className={styles.title}>登录</h1>
        <Form
          {...layout}
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <Button onClick={onGetAllUsersInfo}>get all Info</Button>
      <div>
        <p>点击按钮请求的数据</p>
        <div>{JSON.stringify(userInfo)}</div>
      </div>
      <div>
        <p>全局的状态数据</p>
        <div>{JSON.stringify(store)}</div>
      </div> */}
    </div>
  );
};

export default React.memo(LoginIn);
