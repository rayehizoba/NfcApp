import React from 'react';
import tw from '../lib/tailwind';
import {Image, Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import NfcTools from '../assets/img/nfctools.svg';

function AdvancedCommandsModal({navigation}) {
  return (
    <ModalTemplate containerStyle={tw`w-auto px-4`}>
      <View style={tw`flex flex-row items-center mb-4`}>
        <Image
          style={tw`w-6 h-6 mr-2`}
          source={require('../assets/img/Error.png')}
          resizeMode="contain"
        />
        <Text style={tw`text-danger text-xl font-semibold`}>Disclaimer</Text>
      </View>
      <Text style={tw`text-lg font-semibold text-dark dark:text-lighter mb-4`}>
        For Advanced Users Only !
      </Text>
      <Text style={tw`text-sm text-dark dark:text-lighter mb-4`}>
        Please be careful, an incorrect command may corrupt your NFC chip.
      </Text>
      <Text style={tw`text-sm text-dark dark:text-lighter mb-8`}>
        We take no responsibility for any damage to your equipment or device
      </Text>
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
            I Understand
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default AdvancedCommandsModal;
