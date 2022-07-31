import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tw from '../lib/tailwind';
import SignInPage from '../pages/SignInPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: tw`bg-transparent`,
        headerShown: false,
      }}>
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
