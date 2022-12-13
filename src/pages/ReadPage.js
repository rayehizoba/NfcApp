import React from 'react';
import {Pressable, ScrollView, Text, ToastAndroid, View} from 'react-native';
import NfcTools from '../assets/img/nfctools.svg';
import tw from '../lib/tailwind';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import uuid from 'react-native-uuid';
import NdefRecordItem from '../components/NdefRecordItem';
import {useSelector} from 'react-redux';
import {selectHasNfc} from '../store/app/app.selectors';

function ReadPage(props) {
  const hasNfc = useSelector(selectHasNfc);
  const [tag, setTag] = React.useState();

  React.useEffect(() => {
    if (!hasNfc) {
      return;
    }
    async function scanTag() {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
        setTag(tag);
        ToastAndroid.show('New tag read', ToastAndroid.SHORT);
        // console.warn('tag found', tag);
      });
      await NfcManager.registerTagEvent();
      return () => {
        NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
      };
    }
    return scanTag();
  }, [hasNfc]);

  if (tag) {
    // console.warn(tag);
    const ndefRecordsBytes = (tag.ndefMessage || [])
      .map(({payload}) => payload.length)
      .reduce((acc, bytes) => acc + bytes, 0);
    const tagData = [
      {
        id: uuid.v4(),
        icon: 'information-variant',
        h1: 'UUID',
        h2: tag.id || '--',
      },
      {
        id: uuid.v4(),
        icon: 'nfc-variant',
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
    ];

    return (
      <ScrollView contentContainerStyle={tw`p-4`}>
        {tagData.map(({id, icon, h1, h2}) => (
          <Pressable
            key={id}
            style={tw`my-1.5 rounded-md overflow-hidden flex-row items-center px-3 py-1 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
            android_ripple={{borderless: false}}>
            <Icon
              name={icon}
              style={tw`text-lighter dark:text-dark text-2xl`}
            />
            <View>
              <Text style={tw`ml-3 text-lighter font-bold text-sm`}>{h1}</Text>
              <Text style={tw`ml-3 text-lighter text-xs`}>{h2}</Text>
            </View>
          </Pressable>
        ))}
        {(tag.ndefMessage || []).length > 0 && (
          <>
            <View style={tw`w-full border-b border-accent my-1`} />
            {(tag.ndefMessage || []).map(ndefRecord => (
              <NdefRecordItem ndefRecord={ndefRecord} />
            ))}
          </>
        )}
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
