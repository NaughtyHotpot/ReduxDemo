// @flow
import * as types from './ActionTypes';
import {registerApi} from '../services/ApiServices';
import {SET_USER_ID} from './ActionTypes';
import NetworkUtil from '../services/NetworkUtil';

export let registerMobile;
registerMobile = (text, callbackSuccess, callbackFail, callbackUpdate) => {
  console.log('willDoApiAction', '');
  return (dispatch, getState) => {
    console.log('apiAction', getState());
    NetworkUtil()
      .post('/register', text)
      .then(response => {
        console.log('success', response);
        dispatch({
          type: SET_USER_ID,
          data: response.data.name,
        });
        // callbackSuccess();
      })
      .catch(error => {
        // callbackFail();
        console.log('error', error);
      });
  };
};
