import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import NfcTools from '../assets/img/nfctools.svg';
import tw from '../lib/tailwind';
import NfcManager, {Ndef, NfcEvents} from 'react-native-nfc-manager';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import uuid from 'react-native-uuid';
import {ndefRecordIcon} from '../lib/helpers';

function Item({icon = 'information-variant', h1, h2}) {
  return (
    <View style={tw`flex-row items-center px-4 py-3`}>
      <View
        style={tw`bg-dark dark:bg-neutral rounded-full w-11 h-11 flex-row items-center justify-center`}>
        <Icon name={icon} style={tw`text-lighter dark:text-dark text-3xl`} />
      </View>
      <View style={tw`px-2`}>
        <Text style={tw`text-dark dark:text-lighter font-semibold`}>{h1}</Text>
        <Text style={tw`text-xs`}>{h2}</Text>
      </View>
      <View>
        <Pressable onPress={() => {}}>
          {/*<Icon style={tw``} name="dots" />*/}
        </Pressable>
      </View>
    </View>
  );
}

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
    console.warn(tag);
    const data = [
      {
        id: uuid.v4(),
        icon: 'information-variant',
        h1: 'Technologies available',
        h2: tag.techTypes.map(techType => techType.split('.').pop()).join(', '),
      },
      {
        id: uuid.v4(),
        icon: 'database-settings',
        h1: 'Data format',
        h2: tag.type,
      },
      {
        id: uuid.v4(),
        icon: 'database',
        h1: 'Size',
        h2: '- / ' + tag.maxSize + ' Bytes',
      },
      {
        id: uuid.v4(),
        icon: 'database-import',
        h1: 'Writable',
        h2: tag.isWritable ? 'Yes' : 'No',
      },
      {
        id: uuid.v4(),
        icon: 'lock',
        h1: 'Can be made read-only',
        h2: tag.canMakeReadOnly ? 'Yes' : 'No',
      },
      ...(tag.ndefMessage || []).map((ndefRecord, index) => {
        let icon = null;
        let h1 = `Record ${index + 1}`;
        let h2 = '';
        if (ndefRecord.tnf === Ndef.TNF_WELL_KNOWN) {
          if (ndefRecord.type.every((b, i) => b === Ndef.RTD_BYTES_URI[i])) {
            const [protocol, ...payload] = ndefRecord.payload;
            icon = ndefRecordIcon(protocol);
            h1 += ' - ' + Ndef.RTD_URI_PROTOCOLS[protocol];
            h2 = Ndef.util.bytesToString(payload);
          }
        }
        return {
          id: uuid.v4(),
          icon,
          h1,
          h2,
        };
      }),
    ];

    return (
      <FlatList
        data={data}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
      />
    );
    // return (
    //   <ScrollView contentContainerStyle={tw`p-5`}>
    //     {/*<Text>{JSON.stringify(tag, null, 2)}</Text>*/}
    //   </ScrollView>
    // );
  }

  return (
    <View style={tw`p-10 flex-col items-center`}>
      <Text style={tw`text-lg font-semibold text-dark dark:text-lighter`}>
        Welcome to Tapp!
      </Text>
      <View
        style={tw`w-30 aspect-square rounded-full shadow-xl shadow-accent bg-accent mt-16 flex items-center justify-center`}>
        <NfcTools />
      </View>
      <Text style={tw`text-lg mt-3 text-dark dark:text-lighter`}>
        Approach an NFC Tag
      </Text>
      {/*<Text style={tw`text-lg mt-3 text-dark dark:text-lighter`}>*/}
      {/*  Has Nfc ? ({hasNfc.toString()})*/}
      {/*</Text>*/}
    </View>
  );
}

export default ReadPage;
