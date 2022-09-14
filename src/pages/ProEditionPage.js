import React from 'react';
import {Text, View, Pressable} from 'react-native';
import tw from '../lib/tailwind';
import Rocket from '../assets/img/rocket.svg';

function ProEditionPage(props) {
  const features = [
    'Edit your NFC tag memory',
    'Import from NFC tag',
    'Import from a QR code',
    'Save and Load your tags',
    'More upcoming features include',
  ];

  return (
    <View style={tw`p-5 flex flex-col items-center`}>
      <Rocket />
      <Text
        style={tw`text-lg font-semibold text-dark dark:text-lighter text-center mt-3 mb-10`}>
        Upgrade to the Pro Edition and unlock all features of this app
      </Text>
      <View style={tw`self-start`}>
        {features.map(feature => (
          <View style={tw`flex flex-row items-center mb-3`}>
            <View
              style={tw`h-4 aspect-square rounded-full bg-transparent border-2 border-accent mr-4`}
            />
            <Text style={tw`text-dark dark:text-lighter`}>{feature}</Text>
          </View>
        ))}
      </View>
      <Pressable
        style={tw`btn bg-accent w-40 mt-5`}
        android_ripple={{borderless: false}}>
        <Text style={tw`font-semibold`}>$ 5.99</Text>
      </Pressable>
    </View>
  );
}

export default ProEditionPage;
