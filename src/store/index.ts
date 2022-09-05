import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IStoreType, IRootState } from './types';

import user from './modules/user';

const store = createStore<IRootState>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user
  }
});

// 刷新页面时获取状态
export function setupStore() {
  store.dispatch('user/loadLocalLogin');
}

// 添加调用时的属性提示，重新导出useStore方法
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
