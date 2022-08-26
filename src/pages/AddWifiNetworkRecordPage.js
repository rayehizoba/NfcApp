import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import useKeyboardVisible from '../lib/useKeyboardVisible';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function AddWifiNetworkRecordPage(props) {
  const keyboardVisible = useKeyboardVisible();
  return (
    <ScrollView contentContainerStyle={tw`p-5 flex-col flex-1`}>
      <View style={tw`flex-1`}>
        <Label title="Authentication" style={tw`mb-5 w-1/2`}>
          <View style={tw`input flex-row items-center`}>
            <Text>Open</Text>
            <Icon name="chevron-down" style={tw`text-xl ml-auto`}/>
          </View>
        </Label>
        <Label title="Encryption" style={tw`mb-5 w-1/2`}>
          <View style={tw`input flex-row items-center`}>
            <Text>None</Text>
            <Icon name="chevron-down" style={tw`text-xl ml-auto`}/>
          </View>
        </Label>
        <Label title="SSID" style={tw`mb-5`}>
          <View style={tw`flex-row`}>
            <TextInput
              style={tw`input mr-5 w-1/2`}
              placeholder="Your SSID"
              placeholderTextColor={tw.color('placeholder/50')}
            />
            <Pressable
              style={tw`input px-3`}
              android_ripple={{borderless: false}}>
              <Icon name="magnify" style={tw`text-xl text-black`}/>
            </Pressable>
          </View>
        </Label>
        <Label title="Password" style={tw`mb-5 w-1/2`}>
          <TextInput
            style={tw`input`}
            placeholder="Your password"
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

export default AddWifiNetworkRecordPage;
