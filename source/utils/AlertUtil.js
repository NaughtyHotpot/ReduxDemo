import {Alert} from 'react-native';

export const MyAlert = (message, callBack = () => {}, cancel = false) => {
  const title = 'Alert';

  let buttons = [{text: 'OK', onPress: callBack}];

  if (cancel) {
    buttons = [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {text: 'OK', onPress: callBack},
    ];
  }

  Alert.alert(title, message, buttons);
};
