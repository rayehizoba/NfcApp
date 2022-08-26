import React from 'react';
import tw from '../lib/tailwind';
import WritePage from '../pages/WritePage';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function WriteNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: tw`bg-transparent`,
        headerShown: false,
      }}>
      <Stack.Screen name="WritePage" component={WritePage} />
    </Stack.Navigator>
  );
}

export default WriteNavigator;
