import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'dva';
import { Layout, Input, Button } from 'antd';

import styles from './index.less';

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;

const Home = () => {
  const store = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const { msgList, msg } = store;

  //发送消息， 触发sendMsg事件
  const sendMsg = (): void => {
    if (msg) {
      dispatch({
        type: 'home/onSendMsg',
        payload: {
          msg: msg,
        },
      });
    }
  };

  return (
    <Layout className={styles.box}>
      <Sider>Sider</Sider>
      <Layout>
        <Content>
          <div>
            {msgList.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </Content>
        <Footer className={styles.indexBox}>
          <TextArea
            className={styles.textArea}
            rows={5}
            value={msg}
            bordered={false}
            onChange={(e) => {
              dispatch({
                type: 'home/updateMsg',
                payload: {
                  msg: e.target.value,
                },
              });
            }}
            onPressEnter={sendMsg}
          />
          <div className={styles.sendBox}>
            <Button type='primary' onClick={sendMsg}>
              Send
            </Button>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default React.memo(Home);
