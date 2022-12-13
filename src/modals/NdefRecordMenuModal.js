import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import ModalTemplate from './ModalTemplate';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import * as recordActions from '../store/record/record.actions';

function NdefRecordMenuModal({navigation, route}) {
  const ndefRecord = route.params?.ndefRecord;
  const dispatch = useDispatch();
  const onPressEdit = () => {
    if (ndefRecord) {
      navigation.goBack();
    }
  };
  const onPressDuplicate = () => {
    if (ndefRecord) {
      dispatch(recordActions.duplicateNdefRecord(ndefRecord));
      navigation.goBack();
    }
  };
  const onPressDelete = () => {
    if (ndefRecord) {
      dispatch(recordActions.deleteNdefRecord(ndefRecord));
      navigation.goBack();
    }
  };
  const onPressCancel = () => navigation.goBack();
  return (
    <ModalTemplate containerStyle={tw`w-48`}>
      <View style={tw`flex flex-col items-center`}>
        <Pressable
          onPress={onPressEdit}
          style={tw`w-full mb-2 rounded-md overflow-hidden flex-row items-center p-2 px-4 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
          android_ripple={{borderless: false}}>
          <Icon name="pencil-outline" style={tw`text-2xl text-lighter`} />
          <Text style={tw`ml-3 text-lighter text-lg`}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={onPressDuplicate}
          style={tw`w-full mb-2 rounded-md overflow-hidden flex-row items-center p-2 px-4 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
          android_ripple={{borderless: false}}>
          <Icon name="content-duplicate" style={tw`text-2xl text-lighter`} />
          <Text style={tw`ml-3 text-lighter text-lg`}>Duplicate</Text>
        </Pressable>
        <Pressable
          onPress={onPressDelete}
          style={tw`w-full mb-2 rounded-md overflow-hidden flex-row items-center p-2 px-4 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
          android_ripple={{borderless: false}}>
          <Icon name="delete-outline" style={tw`text-2xl text-lighter`} />
          <Text style={tw`ml-3 text-lighter text-lg`}>Delete</Text>
        </Pressable>
        <Pressable
          onPress={onPressCancel}
          style={tw`btn-outline w-full flex-row items-center justify-start p-2 px-4`}
          android_ripple={{borderless: false}}>
          <Icon name="cancel" style={tw`text-2xl opacity-0`} />
          <Text
            style={tw`ml-3 text-lighter text-lg text-primary dark:text-lighter font-bold`}>
            Cancel
          </Text>
        </Pressable>
      </View>
    </ModalTemplate>
  );
}

export default NdefRecordMenuModal;
