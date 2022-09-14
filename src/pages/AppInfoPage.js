import React from 'react';
import {Text, View} from 'react-native';
import tw from '../lib/tailwind';

function AppInfoPage(props) {
  const info = {
    Version: '0.1',
    Website: 'razorlabs.tech',
    'Report a bug': 'razorlabs.tech',
    'Term of use': 'razorlabs.tech',
    'Developed by': 'Razorlabs',
  };

  return (
    <View style={tw`flex-1 p-5`}>
      {Object.keys(info).map(key => (
        <View style={tw`flex flex-row justify-between pb-4`}>
          <Text style={tw`font-semibold text-dark`}>{key}</Text>
          <Text style={tw`text-dark`}>{info[key]}</Text>
        </View>
      ))}
    </View>
  );
}

export default AppInfoPage;
