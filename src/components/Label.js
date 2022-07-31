import {Text, View} from 'react-native';
import tw from '../lib/tailwind';
import React from 'react';

export function Label(props) {
  return (
    <View style={props.style}>
      <Text style={tw`dark:text-lighter text-dark font-semibold`}>{props.title}</Text>
      {props.children}
    </View>
  );
}
