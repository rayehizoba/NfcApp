import React from 'react';
import {useAppColorScheme} from 'twrnc';
import {Ndef} from 'react-native-nfc-manager';
import {Pressable, Text, View} from 'react-native';
import {getRecordIcon, rtdValueToName} from '../lib/helpers';
import SortArrow from '../assets/img/Sort arrow.svg';
import {TEXT, URI, VCARD} from '../lib/consts';
import tw from '../lib/tailwind';
import {useNavigation} from '@react-navigation/native';

const NdefRecordItem = ({ndefRecord, sortable, onPress}) => {
  const navigation = useNavigation();
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
      onPress={onPress}
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
      {sortable && (
        <SortArrow
          stroke={tw.color(isDarkMode ? 'lighter' : 'dark')}
          style={tw`ml-auto my-2.5`}
          width={iconSize}
          height={iconSize}
        />
      )}
    </Pressable>
  );
};

export default NdefRecordItem;
