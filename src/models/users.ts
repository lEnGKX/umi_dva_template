import HTTP from '@/services';

export default {
  namespace: 'users',
  state: {
    allUsersInfo: null,
  },

  effects: {
    *fetchSaveAllUsersInfo(_, { call, put }) {
      const response = yield call(HTTP.users.getUsersInfo);
      if (response) {
        yield put({
          type: 'saveAllUsersInfo',
          payload: {
            allUsersInfo: response.data,
          },
        });
      }
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },

    saveAllUsersInfo(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
