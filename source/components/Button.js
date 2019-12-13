import {Button, View} from 'react-native';
import React from 'react';

export const MyButton = props => (
  <View
    style={
      props.style
        ? props.style
        : {
            alignSelf: 'center',
            width: '80%',
            marginTop: 10,
            marginBottom: 10,
          }
    }>
    <Button title={props.title} onPress={props.onPress} />
  </View>
);
