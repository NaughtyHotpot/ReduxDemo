import Axios, {AxiosInstance} from 'axios';
import {BASE_URL} from '../config/ServiceConfig';
const instance = Axios.create({
  baseURL: BASE_URL,
});
instance.defaults.headers.common.token = 'AUTH_TOKEN';
instance.defaults.headers.common.userId = 'UID';

const NetworkUtil = (state, dispatch): AxiosInstance => {
  // instance.interceptors.request.use(config => {}, error => {});
  // instance.interceptors.response.use(response => {}, error => {});
  return instance;
};

export default NetworkUtil;
