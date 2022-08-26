import React from 'react';
import tw from '../lib/tailwind';
import {Image} from 'react-native';

function LogoTitle(props) {
  return (
    <Image
      style={tw`w-16`}
      source={require('../assets/img/brand-logo.png')}
      resizeMode="contain"
    />
  );
}

export default LogoTitle;
