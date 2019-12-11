import NetworkUtil from './NetworkUtil';

export let registerApi;

registerApi = (data, callbackSuccess, callbackFail) => {
  NetworkUtil()
    .post('/register', data)
    .then(response => {
        console.log('success', response);
      callbackSuccess();
    })
    .catch(error => {
      // callbackFail();
      console.log('error', error);
    });
};
