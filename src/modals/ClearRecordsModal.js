import React from 'react';
import tw from '../lib/tailwind';
import {Image, Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import NfcTools from '../assets/img/nfctools.svg';
import {useDispatch} from 'react-redux';
import * as recordsActions from '../store/records/records.actions';

function ClearRecordsModal({navigation}) {
  const dispatch = useDispatch();
  const onPressProceed = () => {
    dispatch(recordsActions.clearRecords());
    navigation.navigate('WritePage');
  };
  return (
    <ModalTemplate title="Clear Current Records" containerStyle={tw`w-72`}>
      <View style={tw`py-12 flex flex-col items-center`}>
        <Text
          style={tw`text-center font-semibold text-base text-dark dark:text-lighter w-48`}>
          Are you sure you want to continue?
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
        <Pressable
          onPress={onPressProceed}
          style={tw`ml-2 btn p-1 px-2`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-white dark:text-lighter font-semibold`}>
            Proceed
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default ClearRecordsModal;
