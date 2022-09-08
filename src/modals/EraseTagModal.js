import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import NfcTools from '../assets/img/nfctools.svg';
import {useAppColorScheme} from 'twrnc';

function EraseTagModal({navigation}) {
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <ModalTemplate title="Erase Tag">
      <View style={tw`py-7 flex flex-col items-center`}>
        <NfcTools stroke={tw.color(isDarkMode ? 'lighter/70' : 'secondary')} />
        <Text
          style={tw`text-center font-semibold text-base text-dark dark:text-lighter`}>
          Approach an NFC Tag
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
      </View>
    </ModalTemplate>
  );
}

export default EraseTagModal;
