import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import useKeyboardVisible from '../lib/useKeyboardVisible';

function AddFileRecordPage(props) {
  const keyboardVisible = useKeyboardVisible();
  return (
    <ScrollView contentContainerStyle={tw`p-5 flex-col flex-1`}>
      <View style={tw`flex-1`}>
        <Label title="File://" style={tw`mb-5 w-4/5`}>
          <TextInput
            style={tw`input`}
            placeholder="/storage/..."
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

export default AddFileRecordPage;
