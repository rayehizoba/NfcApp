import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import NfcTools from '../assets/img/nfctools.svg';
import tw from '../lib/tailwind';
import NfcManager, {
  NfcTech,
  Ndef,
  NfcEvents,
  NfcError,
} from 'react-native-nfc-manager';

function ReadPage(props) {
  const [hasNfc, setHasNfc] = React.useState(false);
  const [tag, setTag] = React.useState();

  React.useEffect(() => {
    async function checkNfc() {
      const supported = await NfcManager.isSupported();
      if (supported) {
        await NfcManager.start();
      }
      setHasNfc(supported);
    }

    checkNfc();
  }, []);

  React.useEffect(() => {
    async function scanTag() {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
        setTag(tag);
        console.warn('tag found', tag);
      });
      await NfcManager.registerTagEvent();

      return () => {
        NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
      };
    }

    scanTag();
  }, []);

  if (tag) {
    return (
      <ScrollView contentContainerStyle={tw`p-5`}>
        <Text>{JSON.stringify(tag, null, 2)}</Text>
      </ScrollView>
    );
  }

  return (
    <View style={tw`p-10 flex-col items-center`}>
      <Text style={tw`text-lg font-semibold text-dark dark:text-lighter`}>
        Welcome to Tapp!
      </Text>
      <View
        style={tw`w-30 aspect-square rounded-full shadow-xl shadow-accent bg-accent mt-16 flex items-center justify-center`}>
        <NfcTools/>
      </View>
      <Text style={tw`text-lg mt-3 text-dark dark:text-lighter`}>
        Approach an NFC Tag
      </Text>
      <Text style={tw`text-lg mt-3 text-dark dark:text-lighter`}>
        Has Nfc ? ({hasNfc.toString()})
      </Text>
    </View>
  );
}

export default ReadPage;
