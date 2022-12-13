import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import NfcTools from '../assets/img/nfctools.svg';
import tw from '../lib/tailwind';
import NfcManager, {Ndef, NfcEvents} from 'react-native-nfc-manager';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import uuid from 'react-native-uuid';
import {goToUri, rtdValueToName, tnfValueToName} from '../lib/helpers';
import {TEXT, URI} from '../lib/consts';

function Item({icon = 'information-variant', h1, h2}) {
  return (
    <View style={tw`flex-row items-center px-4 py-3`}>
      <View
        style={tw`bg-dark dark:bg-neutral rounded-full w-11 h-11 flex-row items-center justify-center`}>
        <Icon name={icon} style={tw`text-lighter dark:text-dark text-3xl`} />
      </View>
      <View style={tw`px-2`}>
        <Text style={tw`text-dark dark:text-lighter font-semibold capitalize`}>{h1}</Text>
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
    if (!hasNfc) {
      return;
    }
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
  }, [hasNfc]);

  if (tag) {
    // console.warn(tag);
    const ndefRecordsBytes = (tag.ndefMessage || [])
      .map(({payload}) => payload.length)
      .reduce((acc, bytes) => acc + bytes, 0);
    const data = [
      {
        id: uuid.v4(),
        icon: 'information-variant',
        h1: 'UUID',
        h2: tag.id || '--',
      },
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
        h2: ndefRecordsBytes + ' / ' + tag.maxSize + ' Bytes',
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
        const tnfName = tnfValueToName(ndefRecord.tnf);
        const rtdName = rtdValueToName(ndefRecord.type);
        let h1 = `Record ${index + 1}: ${tnfName + ' ' + rtdName}`;
        let h2 = '';
        let onPress = () => {};

        if (ndefRecord.tnf === Ndef.TNF_WELL_KNOWN) {
          if (rtdName === URI) {
            const uri = Ndef.uri.decodePayload(ndefRecord.payload);
            onPress = () => goToUri(uri);
            h2 = uri;
          } else if (rtdName === TEXT) {
            h2 = Ndef.text.decodePayload(ndefRecord.payload);
          }
        } else if (ndefRecord.ntf === Ndef.MIME_MEDIA) {
          const mimeTypeStr = Array.isArray(ndefRecord.type)
            ? String.fromCharCode(...ndefRecord.type)
            : ndefRecord.type;
          if (mimeTypeStr === Ndef.MIME_WFA_WSC) {
            let credentials = Ndef.wifiSimple.decodePayload(ndefRecord.payload);
            h2 = credentials.ssid + ' ' + credentials.networkKey;
          } else if (mimeTypeStr.indexOf('text') === 0) {
            h2 = Ndef.util.bytesToString(ndefRecord.payload);
            console.warn(h2);
          } else {
            h2 = mimeTypeStr;
          }
        }

        return {
          id: uuid.v4(),
          icon: 'lock',
          onPress,
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
