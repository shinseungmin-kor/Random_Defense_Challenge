import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import ENV from './EnvContext';
import qs from 'qs';

const instance = axios.create({
  timeout: 20000,
  withCredentials: false,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
  },
  baseURL: ENV.API_URL,
  paramsSerializer: (params) => qs.stringify(params),
} as AxiosRequestConfig);

export default instance;
