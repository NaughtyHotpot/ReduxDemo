import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './source/reducers/Reducer';
import thunk from 'redux-thunk';
import AppRouter from './source/containers/AppRouter';
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
if (__DEV__) {
  middleware = [logger, thunk];
}

const store = createStore(Reducer, applyMiddleware(...middleware));
export default class App extends Component<> {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
