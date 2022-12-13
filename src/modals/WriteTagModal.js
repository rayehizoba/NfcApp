import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import NfcTools from '../assets/img/nfctools.svg';
import {useAppColorScheme} from 'twrnc';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';
import {useSelector} from 'react-redux';
import {selectRecordsCollection} from '../store/records/records.selectors';

function WriteTagModal({navigation}) {
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  const records = useSelector(selectRecordsCollection);
  const modalTitle = 'Write on NFC Tag';

  React.useEffect(() => {
    async function writeNdef() {
      if (records.length > 0) {
        try {
          // console.warn(JSON.stringify(records, null, 2));
          const bytes = Ndef.encodeMessage(records);
          await NfcManager.requestTechnology(NfcTech.Ndef);
          await NfcManager.ndefHandler.writeNdefMessage(bytes);
          navigation.goBack();
          setImmediate(() => {
            requestAnimationFrame(() => {
              navigation.navigate('SuccessAlertModal', {
                message: modalTitle + ' complete!',
              });
            });
          });
        } catch (ex) {
          console.warn(ex);
        } finally {
          await NfcManager.cancelTechnologyRequest();
        }
      }
    }
    writeNdef();

    return () => {
      async function cleanup() {
        await NfcManager.cancelTechnologyRequest();
      }
      cleanup();
    };
  }, []);

  return (
    <ModalTemplate title={modalTitle}>
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

export default WriteTagModal;
