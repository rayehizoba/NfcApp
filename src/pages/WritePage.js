import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import AddCircle from '../assets/img/add-circle.svg';
import MoreCircle from '../assets/img/more-circle.svg';
import Edit from '../assets/img/edit.svg';
import tw from '../lib/tailwind';
import SortArrow from '../assets/img/Sort arrow.svg';
import {useAppColorScheme} from 'twrnc';
import {useSelector} from 'react-redux';
import {
  selectRecordsBytes,
  selectRecordsCollection,
} from '../store/records/records.selectors';
import {
  getRecordHeading,
  getRecordIcon,
  getRecordText,
  goToUri,
  rtdValueToName,
  tnfValueToName,
  vCardParse,
} from '../lib/helpers';
import {Ndef} from 'react-native-nfc-manager';
import {TEXT, URI, VCARD} from '../lib/consts';
import Contacts from '../assets/img/contacts.svg';

function WritePage({navigation}) {
  const iconSize = 20;
  const records = useSelector(selectRecordsCollection);
  const recordsBytes = useSelector(selectRecordsBytes);
  const onPressWrite = () => navigation.navigate('WriteTagModal');
  return (
    <ScrollView contentContainerStyle={tw`p-4`}>
      <Pressable
        onPress={() => navigation.navigate('AddRecordNavigator')}
        style={tw`my-1.5 rounded-md overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <AddCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Add a record</Text>
      </Pressable>
      <Pressable
        style={tw`my-1.5 rounded-md overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <MoreCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>More options</Text>
      </Pressable>
      {records.length > 0 && (
        <>
          <Pressable
            onPress={onPressWrite}
            style={tw`my-1.5 rounded-md overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
            android_ripple={{borderless: false}}>
            <Edit
              width={iconSize}
              height={iconSize}
              stroke={tw.color('lighter')}
            />
            <Text style={tw`ml-3 text-lighter`}>
              Write / {recordsBytes} Bytes
            </Text>
          </Pressable>
          <View style={tw`w-full border-b border-accent my-1`} />
        </>
      )}
      {records.map(record => (
        <RecordItem ndefRecord={record} />
      ))}
      {/*<Text>{JSON.stringify(records, null, 2)}</Text>*/}
    </ScrollView>
  );
}

export default WritePage;

/**
 *
 * @param ndefRecord
 * @returns {JSX.Element}
 * @constructor
 */
const RecordItem = ({ndefRecord}) => {
  const {id, tnf, ntf, type, payload} = ndefRecord;
  const iconSize = 20;
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  const rtdName = rtdValueToName(type);
  let name = rtdName;
  let text = '';

  if (tnf === Ndef.TNF_WELL_KNOWN) {
    if (rtdName === URI) {
      name = 'Link';
      text = Ndef.uri.decodePayload(payload);
    } else if (rtdName === TEXT) {
      name = 'Text';
      text = Ndef.text.decodePayload(payload);
    }
  } else if (ntf === Ndef.MIME_MEDIA) {
    const mimeTypeStr = Array.isArray(type)
      ? String.fromCharCode(...type)
      : type;
    if (mimeTypeStr === Ndef.MIME_WFA_WSC) {
      let credentials = Ndef.wifiSimple.decodePayload(payload);
      text = credentials.ssid + ' ' + credentials.networkKey;
    } else if (mimeTypeStr.indexOf('text') === 0) {
      text = Ndef.util.bytesToString(ndefRecord.payload);
      if (mimeTypeStr === VCARD) {
        name = 'Contact';
        // const vCard = vCardParse(text);
        // console.warn(JSON.stringify(vCard, null, 2));
      }
    } else {
      text = mimeTypeStr;
    }
  }

  return (
    <Pressable
      style={tw`my-1.5 rounded-md overflow-hidden flex-row p-3 py-1 border border-gray dark:border-lighter/40 bg-neutral bg-opacity-50 dark:bg-lighter dark:bg-opacity-10`}
      android_ripple={{borderless: false}}>
      <View style={tw`my-2.5`}>
        {React.createElement(getRecordIcon(ndefRecord), {
          width: 21,
          height: 21,
        })}
      </View>
      <View>
        <Text
          style={tw`ml-3 text-dark dark:text-lighter font-semibold capitalize`}>
          {name}: {payload.length} Bytes
        </Text>
        <Text style={tw`ml-3 text-gray dark:text-lighter/60 text-xs`}>
          {text}
        </Text>
      </View>
      <SortArrow
        stroke={tw.color(isDarkMode ? 'lighter' : 'dark')}
        style={tw`ml-auto my-2.5`}
        width={iconSize}
        height={iconSize}
      />
    </Pressable>
  );
};
