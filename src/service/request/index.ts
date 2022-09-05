import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { RequestConfig, RequestInterceptors } from './types';

class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    // 单个实例中的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  // 单个请求添加拦截器
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    });
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    console.log('config', config);
    return this.request<T>({
      ...config,
      method: 'POST'
    });
  }
  put<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PUT'
    });
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    });
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    });
  }
}

export default Request;
