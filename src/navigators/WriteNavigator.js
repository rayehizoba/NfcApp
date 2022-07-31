import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tw from '../lib/tailwind';
import WritePage from '../pages/WritePage';

const Stack = createNativeStackNavigator();

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
