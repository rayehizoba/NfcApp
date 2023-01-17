import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import NfcTools from '../assets/img/nfctools.svg';
import {useAppColorScheme} from 'twrnc';
import {useSelector} from 'react-redux';
import {selectHasNfc} from '../store/app/app.selectors';
import NfcManager, {Ndef, NfcEvents, NfcTech} from 'react-native-nfc-manager';
import {normalizeNdefMessage} from '../lib/helpers';

function CopyTagModal({route, navigation}) {
  const {infinity} = route.params ?? {infinity: false};
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  const hasNfc = useSelector(selectHasNfc);
  const [tag, setTag] = React.useState();
  let title = infinity ? 'Copy To Infinity' : `Copy Tag ${tag ? 2 : 1}/2`;

  // reads tag
  React.useEffect(() => {
    if (!hasNfc) {
      return;
    }
    async function scanTag() {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, async data => {
        console.warn('tag found', data);
        if (tag) {
          let error = null;
          try {
            const ndefMessage = tag.ndefMessage.map(normalizeNdefMessage);
            const bytes = Ndef.encodeMessage(ndefMessage);
            console.warn(bytes);
            await NfcManager.requestTechnology(NfcTech.Ndef);
            await NfcManager.ndefHandler.writeNdefMessage(bytes);
          } catch (ex) {
            console.warn(ex);
            error = ex;
          } finally {
            navigation.goBack();
            requestAnimationFrame(() => {
              navigation.navigate(
                error ? 'ErrorAlertModal' : 'SuccessAlertModal',
                {
                  message: error ? 'Write error!' : 'Copy complete!',
                },
              );
            });
          }
        } else {
          setTag(data);
        }
      });
      await NfcManager.registerTagEvent();
    }
    scanTag();
    return () => {
      async function cleanup() {
        NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
        await NfcManager.cancelTechnologyRequest();
      }
      cleanup();
    };
  }, [hasNfc, navigation, tag]);

  // writes to tag
  React.useEffect(() => {
    if (!tag || !hasNfc) {
      return;
    }
    async function writeNdef() {
      if (tag.ndefMessage.length > 0) {
        try {
          const bytes = Ndef.encodeMessage(tag.ndefMessage);
          await NfcManager.requestTechnology(NfcTech.Ndef);
          await NfcManager.ndefHandler.writeNdefMessage(bytes);
          navigation.goBack();
          setImmediate(() => {
            requestAnimationFrame(() => {
              navigation.navigate('SuccessAlertModal', {
                message: 'Copy complete!',
              });
            });
          });
        } catch (ex) {
          console.warn(ex);
          navigation.goBack();
          setImmediate(() => {
            requestAnimationFrame(() => {
              navigation.navigate('ErrorAlertModal', {
                message: 'Write error!',
              });
            });
          });
        } finally {
          await NfcManager.cancelTechnologyRequest();
        }
      }
    }
    // setTimeout(writeNdef, 500);
    // writeNdef();

    return () => {
      async function cleanup() {
        await NfcManager.cancelTechnologyRequest();
      }
      cleanup();
    };
  }, [hasNfc, tag]);

  return (
    <ModalTemplate title={title}>
      <View style={tw`py-7 flex flex-col items-center`}>
        <NfcTools stroke={tw.color(isDarkMode ? 'lighter/70' : 'secondary')} />
        <Text
          style={tw`text-center font-semibold text-base text-dark dark:text-lighter`}>
          {tag ? 'Approach a Tag to write data' : 'Approach the Source Tag'}
        </Text>
      </View>
      <View style={tw`flex flex-row justify-end`}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={tw`btn-outline p-1 px-2`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-primary dark:text-lighter font-semibold`}>
            Cancel
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default CopyTagModal;
