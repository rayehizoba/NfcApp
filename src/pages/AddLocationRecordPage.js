import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import useKeyboardVisible from '../lib/useKeyboardVisible';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AddLocationRecordPage(props) {
  const keyboardVisible = useKeyboardVisible();
  return (
    <ScrollView contentContainerStyle={tw`p-5 flex-col flex-1`}>
      <View style={tw`flex-1`}>
        <Label title="Latitude" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="47.321476"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Longitude" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="5.041382"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Pressable style={tw`btn ml-auto p-2`} android_ripple={{borderless: false}}>
          <Icon name="my-location" style={tw`text-xl text-lighter mr-2`} />
          <Text style={tw`text-lighter`}>Get Location</Text>
        </Pressable>
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

export default AddLocationRecordPage;
