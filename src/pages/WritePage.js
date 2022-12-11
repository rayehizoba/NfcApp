import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import AddCircle from '../assets/img/add-circle.svg';
import MoreCircle from '../assets/img/more-circle.svg';
import Edit from '../assets/img/edit.svg';
import tw from '../lib/tailwind';
import SortArrow from '../assets/img/Sort arrow.svg';
import {useAppColorScheme} from 'twrnc';
import {useSelector} from 'react-redux';
import {selectRecordsCollection} from '../store/records/records.selectors';
import {getRecordHeading, getRecordIcon, getRecordText} from '../lib/helpers';

function WritePage({navigation}) {
  const iconSize = 20;
  const records = useSelector(selectRecordsCollection);
  const recordsBytes = records
    .map(record => getRecordText(record).length)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
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
      {records.map(({data, record}) => (
        <RecordItem data={data} record={record} />
      ))}
    </ScrollView>
  );
}

export default WritePage;

const RecordItem = ({data, record}) => {
  const iconSize = 20;
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  const text = getRecordText({data, record});
  return (
    <Pressable
      style={tw`my-1.5 rounded-md overflow-hidden flex-row p-3 py-1 border border-gray dark:border-lighter/40 bg-neutral bg-opacity-50 dark:bg-lighter dark:bg-opacity-10`}
      android_ripple={{borderless: false}}>
      <View style={tw`my-2.5`}>
        {React.createElement(getRecordIcon(record), {
          width: 21,
          height: 21,
        })}
      </View>
      <View>
        <Text style={tw`ml-3 text-dark dark:text-lighter font-semibold`}>
          {getRecordHeading({data, record})}
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
