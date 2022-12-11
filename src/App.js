/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useAppColorScheme, useDeviceContext} from 'twrnc';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import tw from './lib/tailwind';
import AuthNavigator from './navigators/AuthNavigator';
import GuestNavigator from './navigators/GuestNavigator';
import store, {persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App: () => Node = () => {
  useDeviceContext(tw);
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
          <SafeAreaView style={tw`bg-lighter dark:bg-darker flex-1`}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AuthNavigator />
            {/*<GuestNavigator />*/}
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
