import React from 'react';
import {Text, View} from 'react-native';
import tw from '../lib/tailwind';
import NfcTools from '../assets/img/nfctools.svg';

function ReadPage(props) {
  return (
    <View style={tw`p-10 flex-col items-center`}>
      <Text style={tw`text-lg font-semibold text-dark dark:text-lighter`}>
        Welcome to Tapp!
      </Text>
      <View
        style={tw`w-30 aspect-square rounded-full shadow-xl shadow-accent bg-accent mt-16 flex items-center justify-center`}>
        <NfcTools />
      </View>
      <Text style={tw`text-lg mt-3 text-dark dark:text-lighter`}>
        Approach an NFC Tag
      </Text>
    </View>
  );
}

export default ReadPage;
