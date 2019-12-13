import NetworkUtil from './NetworkUtil';
import {registerValidate} from './Validation';

export let registerApi;

registerApi = (text, dispatch, callbackSuccess, callbackFail) => {
  NetworkUtil('/register', text, dispatch, registerValidate(text))
    .then(data => {
      console.log('success', data);
      if (callbackSuccess) {
        callbackSuccess(data);
      }
    })
    .catch(error => {
      if (callbackFail) {
        callbackFail();
      }
      console.log('error', error);
    });
};
