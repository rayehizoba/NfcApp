import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import NfcTools from '../assets/img/nfctools.svg';
import tw from '../lib/tailwind';
import NfcManager, {
  NfcTech,
  Ndef,
  NfcEvents,
  NfcError,
} from 'react-native-nfc-manager';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

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
    const list = [
      {
        h1: 'Technologies available',
        h2: tag.techTypes.map(techType => techType.split('.').pop()).join(', '),
      },
      {
        h1: 'Data format',
        h2: tag.type,
      },
      {
        h1: 'Size',
        h2: '- / ' + tag.maxSize + ' Bytes',
      },
      {
        h1: 'Writable',
        h2: tag.isWritable ? 'Yes' : 'No',
      },
      {
        h1: 'Can be made read-only',
        h2: tag.canMakeReadOnly ? 'Yes' : 'No',
      },
    ];
    return (
      <ScrollView contentContainerStyle={tw`p-5`}>
        {/*replace with a flatlist*/}
        {list.map(({h1, h2}) => (
          <View style={tw`flex-row py-2 border-b`}>
            <View style={tw`bg-black rounded-full w-10 h-10`} />
            <View style={tw`px-2`}>
              <Text style={tw`text-black font-semibold`}>{h1}</Text>
              <Text style={tw`text-xs`}>{h2}</Text>
            </View>
            <View>
              <Pressable onPress={() => {}}>
                {/*<Icon style={tw``} name="dots" />*/}
              </Pressable>
            </View>
          </View>
        ))}
        {/*<Text>{JSON.stringify(tag, null, 2)}</Text>*/}
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
