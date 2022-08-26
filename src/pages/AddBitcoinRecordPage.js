import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import useKeyboardVisible from '../lib/useKeyboardVisible';

function AddBitcoinRecordPage(props) {
  const keyboardVisible = useKeyboardVisible();
  return (
    <ScrollView contentContainerStyle={tw`p-5 flex-col flex-1`}>
      <View style={tw`flex-1`}>
        <Label title="Bitcoin address" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="1GtRQWdhduhyd78GShdkdiHGAvb7R5vhjjxGfm"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>
        <View style={tw`flex-row items-center`}>
          <Label title="Amount" style={tw`mb-5 flex-1`}>
            <TextInput
              style={tw`input`}
              placeholder="1.0"
              placeholderTextColor={tw.color('placeholder/50')}
            />
          </Label>
          <Text style={tw`px-3 font-bold text-black`}>BTC</Text>
        </View>
        <Label title="Message" style={tw`mb-5`}>
          <TextInput
            style={tw`input`}
            placeholder="Donation"
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

export default AddBitcoinRecordPage;
