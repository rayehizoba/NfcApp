import React from 'react';
import ModalTemplate from './ModalTemplate';
import {Pressable, Text, View} from 'react-native';
import tw from '../lib/tailwind';

function ProEditionUpgradeModal({navigation, route}) {
  const {title = 'Pro Edition'} = route.params;
  return (
    <ModalTemplate title={title}>
      <View style={tw`pt-2 pb-7 flex flex-col items-center`}>
        <Text style={tw`text-center text-sm text-dark dark:text-lighter mt-2 mb-4`}>
          You cannot access this feature at this time.
        </Text>
        <Text
          style={tw`text-center font-semibold text-sm text-dark dark:text-lighter`}>
          Upgrade to the Pro Edition to gain access.
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
          onPress={() => navigation.replace('ProEditionPage')}
          style={tw`ml-2 btn p-1 px-2`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-white dark:text-lighter font-semibold`}>
            Upgrade
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default ProEditionUpgradeModal;
