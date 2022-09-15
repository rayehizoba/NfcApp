import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import NfcTools from '../assets/img/nfctools.svg';
import {useAppColorScheme} from 'twrnc';

function ScanTagModal({navigation}) {
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <ModalTemplate>
      <View style={tw`flex flex-col items-center`}>
      <Text
          style={tw`text-center text-sm text-dark dark:text-lighter pb-14`}>
          Ready To Scan 
        </Text>
        <NfcTools stroke={tw.color(isDarkMode ? 'lighter/70' : 'secondary')} />
        <Text
          style={tw`text-center text-base text-dark dark:text-lighter`}>
          Approach an NFC Tag
        </Text>
      </View>
      <View style={tw`flex flex-row items-center mt-10`}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={tw`btn-outline p-2 px-22`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-center text-primary dark:text-lighter font-semibold`}>
            Cancel
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default ScanTagModal;
