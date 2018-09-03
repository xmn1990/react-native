function query() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}

export default {
  namespace: 'login',
  state: {
    loading: false, // 控制加载状态
    loginState: false,
  },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    loginSuccess(state, res) {
      return { ...state, ...res.payload, loading: false };
    },
    claerLoginState(state) {
      return { ...state, loginState: false };
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      yield call(query);
      yield put({
        type: 'loginSuccess',
        payload: {
          loginState: true,
        },
      });
    },
  },
};
