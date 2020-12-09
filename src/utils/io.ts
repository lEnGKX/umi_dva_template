import io from 'socket.io-client'; // "socket.io-client": "^2.3.0", 版本 "^3.0.3" 运行不了

/**
   *   socket.on()方法：
    - socket.on()用于监听获取服务端（后端）发送过来的数据
    - socket.on('monitorName', callBack)有两个参数：
        + monitorName：是监听的标识，是自定义的，只要和后端约定好可行了！！)
        + callBack：是一个回调函数，里面的参数就是后端发送过来的数据：
   */

/**
    * socket.emit()方法：
    - socket.emit()用于向服务端（后端）发送数据
    - socket.emit('monitorName', sendData)有两个参数：
        + monitorName：是监听的标识，是自定义的，只要和后端约定好可行了！！)
        + sendData：可以是字符串，也可以是{}JSON对象，这是向后端发送过去的数据
    */

// 稍微封装一下socket.io， 然后暴露出去。
const socket = function () {
  //和后端服务建立链接
  const _io = io('ws://127.0.0.1:7001/ws');

  _io.on('connect', () => {
    console.log('socket 连接成功');
  });

  _io.on('disconnect', () => {
    console.log('socket 断开连接');
  });

  // 重连接时出错
  _io.on('reconnect_error', (attemptNumber) => {
    console.log('======= reconnect_error =======', attemptNumber);
  });

  //报错时走这个方法
  _io.on('connect_error', (error) => {
    console.log('======= error =======', error);
  });

  _io.on('connect_timeout', (timeout) => {
    console.log('======= timeout =======', timeout);
  });

  _io.on('error', (error) => {
    console.log('======= error =======', error);
  });

  _io.on('reconnect', (attemptNumber) => {
    console.log('======= reconnect =======', attemptNumber);
  });

  _io.on('reconnect_attempt', (attemptNumber) => {
    console.log('======= reconnect_attempt =======', attemptNumber);
  });

  _io.on('reconnect_error', (error) => {
    console.log('======= reconnect_error =======', error);
  });

  _io.on('reconnect_failed', () => {
    console.log('======= reconnect_failed =======');
  });

  _io.on('ping', () => {
    console.log('======= ping =======');
  });

  _io.on('pong', (latency) => {
    console.log('======= pong =======', latency);
  });

  return _io;
};

export default socket;
