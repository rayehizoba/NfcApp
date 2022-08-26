import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import tw from '../lib/tailwind';
import SignInPage from '../pages/SignInPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import forSlideScreen from '../lib/forSlideScreen';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: tw`bg-transparent`,
        cardStyleInterpolator: forSlideScreen,
        headerShown: false,
      }}>
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
