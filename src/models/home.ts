import io from '@/utils/io';

export default {
  namespace: 'home',
  state: {
    msgList: [],
    msg: '',
  },

  effects: {
    onSendMsg({ payload }) {
      const { msg } = payload;
      window.socket.emit('sendMsg', msg);
    },
  },
  subscriptions: {
    globalWs({ dispatch, history }, done) {
      history.listen((location) => {
        const { pathname } = location;
        if (pathname === '/home') {
          const socket = io();
          window.socket = socket; // 转为全局
          //监听后端推送过来的数据(注, exchange 是可以自定义的，只要和后端约定好可行了！！)
          socket.on('exchange', (data) => {
            console.log(data, 'exchange'); //这是后端推送过来的数据
            const newMsgList = [];
            newMsgList.push(data);
            dispatch({
              type: 'home/updateState',
              payload: {
                msgList: newMsgList,
              },
            });
          });
          // 监听broadcast事件， 获取服务器消息
          socket.on('broadcast', (data: string) => {
            console.log(data, 'broadcast');
            dispatch({
              type: 'home/updateMsgList',
              payload: {
                msg: data,
              },
            });
            dispatch({
              type: 'home/updateMsg',
              payload: {
                msg: '',
              },
            });
          });
          return () => {
            socket.close();
          };
        }
      });
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
    updateMsg(state, { payload }) {
      return { ...state, ...payload };
    },
    updateMsgList(state, { payload }) {
      const { msg } = payload;
      const { msgList } = state;
      msgList.push(msg);
      return { ...state, msgList };
    },
  },
};
