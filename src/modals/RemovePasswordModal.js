import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, TextInput, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import {Label} from '../components/Label';

function RemovePasswordModal({navigation}) {
  const onReset = () => {
    navigation.goBack();
    setImmediate(() => {
      requestAnimationFrame(() => {
        navigation.navigate('SuccessAlertModal', {
          message: 'You have successfully removed your Password',
        });
      });
    });
  };

  return (
    <ModalTemplate title="Remove Password">
      <View style={tw`p-3 pt-5 pb-10`}>
        <Label title="Enter Current Password">
          <TextInput style={tw`input`} />
        </Label>
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
          onPress={onReset}
          style={tw`ml-2 btn p-1 px-2`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-white dark:text-lighter font-semibold`}>
            Reset
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default RemovePasswordModal;
