import * as types from './ActionTypes';

export let registerMobile;
registerMobile = (text, callbackSuccess, callbackFail, callbackUpdate) => {
  console.log('willDoApiAction', '');
  return (dispatch, getState) => {
    console.log('apiAction', getState());

    // api.register().then(data => {
    //   {
    dispatch({
      type: types.SET_USER_ID,
      data: text,
    });
    //   }
    // });
  };
};
