/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useAppColorScheme, useDeviceContext} from 'twrnc';
import {NavigationContainer} from '@react-navigation/native';
import tw from './lib/tailwind';
import AuthNavigator from './navigators/AuthNavigator';
import GuestNavigator from './navigators/GuestNavigator';

const App: () => Node = () => {
  useDeviceContext(tw);
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <NavigationContainer>
      <SafeAreaView style={tw`bg-transparent dark:bg-darker flex-1`}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/*<AuthNavigator />*/}
        <GuestNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
