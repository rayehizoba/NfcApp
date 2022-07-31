import React from 'react';
import {Pressable, Text, View} from 'react-native';
import tw from '../lib/tailwind';
import AddCircle from '../assets/img/add-circle.svg';
import MoreCircle from '../assets/img/more-circle.svg';

function WritePage(props) {
  const iconSize = 20;

  return (
    <View style={tw`p-5`}>
      <Pressable
        onPress={() => props.navigation.navigate('AddRecordPage')}
        style={tw`my-1.5 rounded overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <AddCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Add a record</Text>
      </Pressable>
      <Pressable
        style={tw`my-1.5 rounded overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <MoreCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>More options</Text>
      </Pressable>
    </View>
  );
}

export default WritePage;
