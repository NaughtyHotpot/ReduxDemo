import {Button, View} from 'react-native';
import React from 'react';

export const MyButton = props => (
  <View style={{alignSelf: 'center', width: '80%'}}>
    <Button title={props.title} onPress={props.onPress} />
  </View>
);
