import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, ScrollView, Text, View} from 'react-native';

function AddRecordForm({
  children,
  onPressCancel,
  onPressSave,
  title,
  icon,
  contentContainerStyle,
}) {
  return (
    <View style={tw`flex-col flex-1`}>
      <View
        style={tw`bg-white dark:bg-green shadow-md p-4 pt-2 dark:py-3 flex-row items-center`}>
        {icon &&
          React.createElement(icon, {
            width: 21,
            height: 21,
          })}
        <Text style={tw`ml-8 text-dark dark:text-white`}>{title}</Text>
      </View>

      <ScrollView contentContainerStyle={[tw`p-4 py-8`, contentContainerStyle]}>
        {children}
      </ScrollView>

      <View style={tw`flex-row p-4`}>
        <Pressable
          onPress={onPressCancel}
          style={tw`btn mr-5 flex-1`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-lighter uppercase font-semibold`}>Cancel</Text>
        </Pressable>
        <Pressable
          onPress={onPressSave}
          style={tw`btn flex-1`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-lighter uppercase font-semibold`}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default AddRecordForm;
