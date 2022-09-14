import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, TextInput, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import {Label} from '../components/Label';

function SetPasswordModal({navigation}) {
  const onSave = () => {
    navigation.goBack();
    setImmediate(() => {
      requestAnimationFrame(() => {
        navigation.navigate('SuccessAlertModal', {
          message: 'You have successfully set a new Password',
        });
      });
    });
  };

  return (
    <ModalTemplate title="Set Password">
      <View style={tw`p-3 pt-5 pb-10`}>
        <Label title="Password" style={tw`mb-4`}>
          <TextInput style={tw`input`} />
        </Label>
        <Label title="Confirm password">
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
          onPress={onSave}
          style={tw`ml-2 btn p-1 px-2`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-white dark:text-lighter font-semibold`}>
            Save
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default SetPasswordModal;
