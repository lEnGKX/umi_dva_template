import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'dva';

import HTTP from '@/services';

import { Input, Button } from 'antd';

import styles from './index.less';

const LoginIn = () => {
  const store = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);

  const onGetAllUsersInfo = () => {
    HTTP.users.getUsersInfo().then((res) => {
      setUserInfo(res);
    });
  };

  useEffect(() => {
    // HTTP.users.getUsersInfo().then((res) => {
    //   dispatch({ type: 'users/updateState', payload: { allUsersInfo: res } });
    // });

    dispatch({ type: 'users/fetchSaveAllUsersInfo' });
  }, []);

  return (
    <div>
      <Input />
      <Button onClick={onGetAllUsersInfo}>get all Info</Button>
      <div>
        <p>点击按钮请求的数据</p>
        <div>{JSON.stringify(userInfo)}</div>
      </div>
      <div>
        <p>全局的状态数据</p>
        <div>{JSON.stringify(store)}</div>
      </div>
    </div>
  );
};

export default React.memo(LoginIn);
