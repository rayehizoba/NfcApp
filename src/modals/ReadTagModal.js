import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import NfcTools from '../assets/img/nfctools.svg';
import {useAppColorScheme} from 'twrnc';
import NfcManager, {Ndef, NfcEvents, NfcTech} from 'react-native-nfc-manager';
import {useDispatch, useSelector} from 'react-redux';
import {selectRecordsCollection} from '../store/records/records.selectors';
import {selectHasNfc} from '../store/app/app.selectors';
import * as recordsActions from '../store/records/records.actions';

function ReadTagModal({navigation}) {
  const dispatch = useDispatch();
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';

  const hasNfc = useSelector(selectHasNfc);

  React.useEffect(() => {
    if (!hasNfc) {
      return;
    }
    async function scanTag() {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
        dispatch(recordsActions.importRecords(tag.ndefMessage || []));
        navigation.navigate('WritePage');
      });
      await NfcManager.registerTagEvent();
    }
    scanTag();
    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, [hasNfc]);

  return (
    <ModalTemplate title="Ready To Scan">
      <View style={tw`py-7 flex flex-col items-center`}>
        <NfcTools stroke={tw.color(isDarkMode ? 'lighter/70' : 'secondary')} />
        <Text
          style={tw`text-center font-semibold text-base text-dark dark:text-lighter`}>
          Approach an NFC Tag
        </Text>
      </View>
      <View style={tw`flex flex-row justify-end`}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={[tw`btn-outline p-1 px-2`]}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-primary dark:text-lighter font-semibold`}>
            Cancel
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default ReadTagModal;
