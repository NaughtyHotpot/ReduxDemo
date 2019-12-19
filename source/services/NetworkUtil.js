import Axios, {AxiosInstance} from 'axios';
import {BASE_URL} from '../config/ServiceConfig';
import {MyAlert} from '../utils/AlertUtil';
import {VALIDATED} from '../config/Constant';
import {PROGRESSING} from '../actions/ActionTypes';
import NavigationService from './NavigationService';

// instance.interceptors.response.use(
//   response => {
//     const res = response.data;
//     if (res.msg === 1) {
//       //success
//       return response;
//     } else {
//       console.log('interceptors fail:', '');
//       MyAlert('fail');
//       return Promise.reject({message: 'error'});
//     }
//   },
//   error => {
//     console.log('interceptors error:', error);
//     return Promise.reject(error);
//   },
// );

// const NetworkUtil = (state, dispatch): AxiosInstance => instance;
const NetworkUtil = async (api, params, dispatch, validation) => {
  const instance = Axios.create({
    baseURL: BASE_URL,
  });
  instance.defaults.headers.common.token = 'AUTH_TOKEN';
  instance.defaults.headers.common.userId = 'UID';

  instance.interceptors.request.use(
    config => {
      config.headers.common.token = 'CHANGED_TOKEN';
      if (validation === VALIDATED) {
        dispatch({
          type: PROGRESSING,
          data: true,
        });
        return config;
      } else {
        return Promise.reject({message: validation});
      }
    },
    error => {
      return Promise.reject(error);
    },
  );
  return new Promise((resolve, reject) => {
    instance
      .post(api, params)
      .then(response => {
        dispatch({
          type: PROGRESSING,
          data: false,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: PROGRESSING,
          data: false,
        });
        console.log('post catch error:', error);
        MyAlert(error.message);
        reject(error);
      });
  });
};
export default NetworkUtil;
