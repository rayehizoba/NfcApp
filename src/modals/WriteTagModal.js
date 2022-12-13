import React from 'react';
import tw from '../lib/tailwind';
import {Image, Pressable, Text, View} from 'react-native';
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
  const [writeSuccess, setWriteSuccess] = React.useState(false);

  React.useEffect(() => {
    async function writeNdef() {
      setWriteSuccess(false);
      if (records.length > 0) {
        try {
          const bytes = Ndef.encodeMessage(records);
          await NfcManager.requestTechnology(NfcTech.Ndef);
          await NfcManager.ndefHandler.writeNdefMessage(bytes);
          setWriteSuccess(true);
        } catch (ex) {
          console.warn(ex);
        } finally {
          await NfcManager.cancelTechnologyRequest();
        }
      }
    }
    writeNdef();
  }, []);

  return (
    <ModalTemplate title="Write on NFC Tag">
      <View style={tw`py-7 flex flex-col items-center`}>
        {writeSuccess ? (
          <Image
            style={tw`h-12`}
            source={require('../assets/img/Ok.png')}
            resizeMode="contain"
          />
        ) : (
          <NfcTools
            stroke={tw.color(isDarkMode ? 'lighter/70' : 'secondary')}
          />
        )}
        <Text
          style={tw`text-center font-semibold text-base text-dark dark:text-lighter`}>
          {writeSuccess ? 'Write complete!' : 'Approach an NFC Tag'}
        </Text>
      </View>
      <View style={tw`flex flex-row justify-end`}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={[tw`btn-outline p-1 px-2`, writeSuccess ? tw`px-5` : tw``]}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-primary dark:text-lighter font-semibold`}>
            {writeSuccess ? 'OK' : 'Cancel'}
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default WriteTagModal;
