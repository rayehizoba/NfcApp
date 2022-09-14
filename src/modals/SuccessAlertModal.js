import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import IconCancel from '../assets/img/icons8_cancel.svg';
import ModalTemplate from './ModalTemplate';
import tw from '../lib/tailwind';

function SuccessAlertModal({route, navigation}) {
  const {message} = route.params;
  return (
    <ModalTemplate>
      <View style={tw`flex flex-row justify-end`}>
        <Pressable
          hitSlop={10}
          onPress={() => navigation.goBack()}
          android_ripple={{borderless: true}}>
          <IconCancel />
        </Pressable>
      </View>
      <View style={tw`flex flex-col items-center py-5 pb-10`}>
        <Image
          style={tw`h-14 mb-5`}
          source={require('../assets/img/Ok.png')}
          resizeMode="contain"
        />
        <Text style={tw`text-lg font-semibold text-dark dark:text-lighter leading-tight text-center`}>
          {message}
        </Text>
      </View>
    </ModalTemplate>
  );
}

export default SuccessAlertModal;
