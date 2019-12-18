import {NavigationActions, StackActions} from 'react-navigation';
let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function resetAction(routeName, params) {
  const action = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName: routeName, params: params}),
    ],
  });
  _navigator.dispatch(action);
}

// add other navigation functions that you need and export them

export default {
  navigate,
  resetAction,
  setTopLevelNavigator,
};
