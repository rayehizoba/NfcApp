import React from 'react';
import MainNavigator from './MainNavigator';
import tw from '../lib/tailwind';
import AddRecordPage from '../pages/AddRecordPage';
import EditRecordPage from '../pages/EditRecordPage';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: tw`bg-transparent`,
        headerStyle: tw`bg-primary/100 dark:bg-secondary/50`,
        headerTintColor: tw.color('lighter'),
        headerTitle: '',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AddRecordPage" component={AddRecordPage} />
      <Stack.Screen name="EditRecordPage" component={EditRecordPage} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
