import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './source/reducers/Reducer';
import thunk from 'redux-thunk';
import AppRouter from './source/containers/AppRouter';
import codePush from 'react-native-code-push';
import {MyAlert} from './source/utils/AlertUtil';
function logger({getState}) {
  return next => action => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}
function validate({getState}) {
  return next => action => {
    console.log('will validate', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after validate', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}
let middleware = [thunk];
// if (__DEV__) {
//   middleware = [logger, validate, thunk];
// }

const store = createStore(Reducer, applyMiddleware(...middleware));
class App extends Component<> {
  componentDidMount(): void {
    codePush
      .checkForUpdate()
      .then(update => {
        if (update) {
          MyAlert('An update is available! Should we download it?');
        } else {
          MyAlert('The app is up to date!');
        }
      })
      .catch(error => {
        MyAlert(error.message);
      });
  }

  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default codePush(App);
