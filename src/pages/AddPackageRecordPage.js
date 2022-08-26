import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useKeyboardVisible from '../lib/useKeyboardVisible';
import tw from '../lib/tailwind';

function AddPackageRecordPage(props) {
  const keyboardVisible = useKeyboardVisible();
  return (
    <ScrollView contentContainerStyle={tw`p-5 flex-col flex-1`}>
      <View style={tw`flex-1`}>
        <View style={tw`flex-row`}>
          <TextInput
            style={tw`input mr-5 flex-1`}
            placeholder="com.fastdev.wdnfc"
            placeholderTextColor={tw.color('placeholder/50')}
          />
          <Pressable
            style={tw`input px-3`}
            android_ripple={{borderless: false}}>
            <Icon name="arrow-right" style={tw`text-xl`} />
          </Pressable>
        </View>
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

export default AddPackageRecordPage;
