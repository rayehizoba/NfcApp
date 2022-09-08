import React from 'react';
import tw from '../lib/tailwind';
import {Image, Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import NfcTools from '../assets/img/nfctools.svg';

function LockTagModal({navigation}) {
  return (
    <ModalTemplate title="Lock Tag">
      <View style={tw`pt-2 pb-7 flex flex-col items-center`}>
        <Image
          style={tw`w-6 h-6`}
          source={require('../assets/img/Error.png')}
          resizeMode="contain"
        />
        <Text
          style={tw`text-center font-semibold text-sm text-dark dark:text-lighter`}>
          This process cannot be reverted !
        </Text>
        <Text style={tw`text-center text-sm text-dark dark:text-lighter mt-2`}>
          Are you sure you want to continue?
        </Text>
      </View>
      <View style={tw`flex flex-row justify-end`}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={tw`btn-outline p-1 px-2`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-primary dark:text-lighter font-semibold`}>
            Cancel
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          style={tw`ml-2 btn p-1 px-2`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-white dark:text-lighter font-semibold`}>
            Proceed
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default LockTagModal;
