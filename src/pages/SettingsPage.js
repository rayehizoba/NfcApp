import React from 'react';
import {Pressable, Switch, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from '../lib/tailwind';

function SettingsPage({navigation}) {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleSwitch = () => setDarkMode(previousState => !previousState);
  return (
    <View style={tw``}>
      {/* Appearance */}
      <View style={tw`bg-placeholder/50 p-4 py-3`}>
        <Text style={tw`font-medium text-dark dark:text-lighter`}>
          Appearance
        </Text>
      </View>
      <Pressable android_ripple={{borderless: false}}>
        <View style={tw`flex flex-row items-center justify-between p-4 py-2`}>
          <Text style={tw`text-dark dark:text-lighter`}>Dark Mode</Text>
          <Switch
            trackColor={{false: tw.color('dark'), true: tw.color('primary')}}
            thumbColor={tw.color('light')}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={darkMode}
          />
        </View>
      </Pressable>

      {/* Pro Edition */}
      <View style={tw`bg-placeholder/50 p-4 py-3 mt-6`}>
        <Text style={tw`font-medium text-dark dark:text-lighter`}>
          Pro Edition
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate('ProEditionPage')}
        android_ripple={{borderless: false}}>
        <View style={tw`flex flex-row items-center justify-between p-4 py-2`}>
          <Text style={tw`text-dark dark:text-lighter`}>
            Purchase Pro Edition
          </Text>
          <MaterialCommunityIcons
            name="chevron-right"
            style={tw`text-xl text-dark dark:text-lighter px-1`}
          />
        </View>
      </Pressable>

      {/* More */}
      <View style={tw`bg-placeholder/50 p-4 py-3 mt-6`}>
        <Text style={tw`font-medium text-dark dark:text-lighter`}>More</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate('AppInfoPage')}
        android_ripple={{borderless: false}}>
        <View style={tw`flex flex-row items-center justify-between p-4 py-2`}>
          <Text style={tw`text-dark dark:text-lighter`}>App Info</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            style={tw`text-xl text-dark dark:text-lighter px-1`}
          />
        </View>
      </Pressable>
      <Pressable android_ripple={{borderless: false}}>
        <View style={tw`flex flex-row items-center justify-between p-4 py-2`}>
          <Text style={tw`text-dark dark:text-lighter`}>About</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            style={tw`text-xl text-dark dark:text-lighter px-1`}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default SettingsPage;
