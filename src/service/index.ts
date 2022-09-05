import Request from './request';
import mock from './mock';
import localCache from '@/utils/catch';

import { tokenKey } from '@/common';

const TIMEOUT = 5000;

const IRequest = new Request({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache(tokenKey);
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    }
  }
});

if (process.env.VUE_APP_ENV === 'mock') {
  mock(IRequest.instance);
}

export default IRequest;
