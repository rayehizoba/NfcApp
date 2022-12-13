import React from 'react';
import {Pressable, Text, View} from 'react-native';
import AddCircle from '../assets/img/add-circle.svg';
import MoreCircle from '../assets/img/more-circle.svg';
import Edit from '../assets/img/edit.svg';
import tw from '../lib/tailwind';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectRecordsBytes,
  selectRecordsCollection,
} from '../store/records/records.selectors';
import NdefRecordItem from '../components/NdefRecordItem';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import * as recordsActions from '../store/records/records.actions';

function WritePage({navigation}) {
  const iconSize = 20;
  const dispatch = useDispatch();
  const records = useSelector(selectRecordsCollection);
  const recordsBytes = useSelector(selectRecordsBytes);
  const onPressAdd = () => navigation.navigate('AddRecordNavigator');
  const onPressMore = () => navigation.navigate('MoreOptionsPage');
  const onPressWrite = () => navigation.navigate('WriteTagModal');
  const onPressRecordItem = React.useCallback(
    ndefRecord => () => {
      navigation.navigate('NdefRecordMenuModal', {ndefRecord});
    },
    [navigation],
  );

  const renderItem = React.useCallback(
    ({item, drag, isActive}) => {
      return (
        <ScaleDecorator>
          <NdefRecordItem
            ndefRecord={item}
            onPress={onPressRecordItem(item)}
            onLongPress={drag}
            active={isActive}
            disabled={isActive}
            sortable
          />
        </ScaleDecorator>
      );
    },
    [onPressRecordItem],
  );

  const onDragEnd = ({data}) => {
    dispatch(recordsActions.setRecords(data));
  };

  return (
    <DraggableFlatList
      data={records}
      contentContainerStyle={tw`p-4`}
      onDragEnd={onDragEnd}
      keyExtractor={(item, index) => index + JSON.stringify(item)}
      ListHeaderComponent={() => (
        <>
          <Pressable
            onPress={onPressAdd}
            style={tw`my-1.5 rounded-md overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
            android_ripple={{borderless: false}}>
            <AddCircle width={iconSize} height={iconSize} />
            <Text style={tw`ml-3 text-lighter`}>Add a record</Text>
          </Pressable>
          <Pressable
            onPress={onPressMore}
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
        </>
      )}
      renderItem={renderItem}
    />
  );
}

export default WritePage;
