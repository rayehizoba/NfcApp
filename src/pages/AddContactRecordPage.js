import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import useKeyboardVisible from '../lib/useKeyboardVisible';
import {CONTACT_NUMBER_RECORD} from '../lib/consts';

function AddContactRecordPage({navigation}) {
  const keyboardVisible = useKeyboardVisible();
  const onPressCancel = () => navigation.goBack();
  return (
    <ScrollView contentContainerStyle={tw`flex-col flex-1`}>
      <View style={tw`bg-white shadow-md p-4 pt-2 flex-row items-center`}>
        {React.createElement(CONTACT_NUMBER_RECORD.icon, {
          width: 20,
          height: 20,
        })}
        <Text style={tw`ml-8 text-dark`}>Enter your contact</Text>
      </View>

      <View style={tw`flex-1 p-4`}>
        <Label title="Contact Name" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="Linda Martins"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Company" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="RazorLabs"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Address" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="73, 3rd Avenue FHA phase 1, Abuja"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Phone Number" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="+2347041259889"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Email" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="abc123@xyz.com"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Website" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="https://www.razorlabs.com"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
      </View>

      {keyboardVisible || (
        <View style={tw`flex-row p-4`}>
          <Pressable
            onPress={onPressCancel}
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

export default AddContactRecordPage;
