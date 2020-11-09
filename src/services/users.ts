import request from '@/utils/request';
import apis from './apis';

const { userApis } = apis;

export const getUsersInfo = () => {
  return request(userApis.getUsersInfoApi, {
    method: 'get',
  });
};
