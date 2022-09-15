import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';

function ClearCurrentRecordsModal({navigation}) {
  return (
    <ModalTemplate title="Clear Current Records">
      <View style={tw`pt-2 pb-7 flex flex-col items-center`}>
        <Text style={tw`text-center font-semibold text-sm text-dark dark:text-lighter mt-6 mb-5`}>
          Are you sure you want to continue?
        </Text>
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
          onPress={() => navigation.goBack()}
          style={tw`ml-2 btn p-1 px-2`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-white dark:text-lighter font-semibold`}>
            Proceed
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default ClearCurrentRecordsModal;
