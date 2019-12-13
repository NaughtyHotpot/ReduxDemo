import {registerApi} from '../services/ApiServices';
import {SET_MOBILE} from './ActionTypes';

export let registerMobile;
registerMobile = text => {
  console.log('willDoApiAction', '');
  return (dispatch, getState) => {
    console.log('apiAction', getState());
    registerApi(text, dispatch, data => {
      dispatch({
        type: SET_MOBILE,
        data: data.name,
      });
    });
  };
};
