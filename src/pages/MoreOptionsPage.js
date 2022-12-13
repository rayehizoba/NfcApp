import React from 'react';
import {Pressable, ScrollView, Text} from 'react-native';
import tw from '../lib/tailwind';
import AddCircle from '../assets/img/add-circle.svg';
import MoreCircle from '../assets/img/more-circle.svg';
import Edit from '../assets/img/edit.svg';

const iconSize = 24;

function MoreOptionsPage({navigation}) {
  const onPressClear = () => navigation.navigate('ClearRecordsModal');
  const onPressImportNFC = () => navigation.navigate('ReadTagModal');
  const onPressImportQR = () => {
    navigation.navigate('ProEditionUpgradeModal', {
      title: 'Import from QR Code',
    });
  };
  return (
    <ScrollView contentContainerStyle={tw`p-4`}>
      <Pressable
        onPress={onPressClear}
        style={tw`my-1.5 rounded-md overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <AddCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Clear current records</Text>
      </Pressable>
      <Pressable
        onPress={onPressImportNFC}
        style={tw`my-1.5 rounded-md overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <MoreCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Import from NFC tag</Text>
      </Pressable>
      <Pressable
        onPress={onPressImportQR}
        style={tw`my-1.5 rounded-md overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <Edit width={iconSize} height={iconSize} stroke={tw.color('lighter')} />
        <Text style={tw`ml-3 text-lighter`}>Import from QR code</Text>
      </Pressable>
    </ScrollView>
  );
}

export default MoreOptionsPage;
