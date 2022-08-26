import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import useKeyboardVisible from '../lib/useKeyboardVisible';

function AddMailRecordPage(props) {
  const keyboardVisible = useKeyboardVisible();
  return (
    <ScrollView contentContainerStyle={tw`p-5 flex-col flex-1`}>
      <View style={tw`flex-1`}>
        <Label title="Recipient Email" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="abcde@xyz.com"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Subject" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="Hello !"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Message" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="This app is amazing!"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
      </View>

      {keyboardVisible || (
        <View style={tw`flex-row`}>
          <Pressable
            style={tw`btn mr-5 flex-1`}
            android_ripple={{borderless: false}}>
            <Text style={tw`text-lighter uppercase font-semibold`}>Cancel</Text>
          </Pressable>
          <Pressable
            style={tw`btn flex-1`}
            android_ripple={{borderless: false}}>
            <Text style={tw`text-lighter uppercase font-semibold`}>Save</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

export default AddMailRecordPage;
