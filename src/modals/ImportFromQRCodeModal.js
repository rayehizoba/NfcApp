import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';

function ImportFromQRCodeModal({navigation}) {
  return (
    <ModalTemplate title="Import From QR Code">
      <View style={tw`pt-2 pb-7 flex flex-col items-center`}>
        <Text
          style={tw`text-center text-sm text-dark dark:text-lighter`}>
          You cannot access this feature at this time. 
        </Text>
        <Text style={tw`text-center font-semibold text-sm text-dark dark:text-lighter mt-4`}>
          Upgrade to the Pro Edition to gain access.
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
            Upgrade
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default ImportFromQRCodeModal;
