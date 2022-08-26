import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import useKeyboardVisible from '../lib/useKeyboardVisible';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function AddEmergencyRecordPage(props) {
  const keyboardVisible = useKeyboardVisible();
  return (
    <ScrollView contentContainerStyle={tw`p-5 flex-col`}>
      <View style={tw`flex-1`}>
        <Label title="Language" style={tw`mb-5`}>
          <View style={tw`input flex-row items-center`}>
            <Text>English (recommended)</Text>
            <Icon name="chevron-down" style={tw`text-xl ml-auto`} />
          </View>
        </Label>
        <Label title="Full name" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="Cassey Adam"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Birth date" style={tw`mb-5 w-1/2`}>
          <TextInput
            style={tw`input`}
            placeholder="Choose date"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Address" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="73,3rd Avenue, Abuja"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label
          title="Allergies, medications or special conditions"
          style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="Claustrophobia"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <View style={tw`flex-row`}>
          <Label title="Blood Type" style={tw`mb-5 flex-1`}>
            <View style={tw`input flex-row items-center`}>
              <Text>Unknown</Text>
              <Icon name="chevron-down" style={tw`text-xl ml-auto`} />
            </View>
          </Label>
          <View style={tw`w-5`} />
          <Label title="Organ Donor" style={tw`mb-5 flex-1`}>
            <View style={tw`input flex-row items-center`}>
              <Text>Unspecified</Text>
              <Icon name="chevron-down" style={tw`text-xl ml-auto`} />
            </View>
          </Label>
        </View>
        <Label title="Additional information" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="Any medical history"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>

        <View style={tw`border-b border-accent`} />

        <Text style={tw`font-bold text-center text-base text-black mt-3`}>
          Emergency Contact
        </Text>

        <Label title="Name" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="Clara Andrew"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <Label title="Phone Number" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="09023465782"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
      </View>

      {keyboardVisible || (
        <View style={tw`flex-row mt-12`}>
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

export default AddEmergencyRecordPage;
