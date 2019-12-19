import {registerApi} from '../services/ApiServices';
import {SET_MOBILE} from './ActionTypes';
import NavigationService from '../services/NavigationService';
import NetworkUtil from '../services/NetworkUtil';
import {registerValidate} from '../services/Validation';
import {MyAlert} from '../utils/AlertUtil';

export let registerMobile;
registerMobile = text => {
  console.log('willDoApiAction', '');
  return (dispatch, getState) => {
    console.log('apiAction', getState());
    NetworkUtil('/register', {mobile: text}, dispatch, registerValidate(text))
      .then(data => {
        NavigationService.navigate('Landing', {data: data});
        console.log('success', data);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};
