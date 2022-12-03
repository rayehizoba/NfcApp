import React from 'react';
import tw from '../lib/tailwind';
import {createStackNavigator} from '@react-navigation/stack';
import AddRecordPage from '../pages/AddRecordPage';
import {useAppColorScheme} from 'twrnc';
import EditRecordPage from '../pages/EditRecordPage';
import forSlideScreen from '../lib/forSlideScreen';
import AddContactRecordPage from '../pages/AddContactRecordPage';
import AddTextRecordPage from '../pages/AddTextRecordPage';

const Stack = createStackNavigator();

function AddRecordNavigator() {
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: true,
        cardStyle: isDarkMode ? tw`bg-darker` : tw`bg-white`,
        contentStyle: tw`bg-transparent`,
        headerStyle: tw`bg-white dark:bg-secondary shadow-md`,
        headerTintColor: tw.color(isDarkMode ? 'lighter' : 'primary'),
        headerTitle: 'Add a record',
        headerShadowVisible: false,
        headerShown: true,
        cardStyleInterpolator: forSlideScreen,
      }}>
      <Stack.Screen
        name="AddRecordPage"
        component={AddRecordPage}
        options={{
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="AddContactRecordPage"
        component={AddContactRecordPage}
      />
      <Stack.Screen name="AddTextRecordPage" component={AddTextRecordPage} />

      <Stack.Screen name="EditRecordPage" component={EditRecordPage} />
    </Stack.Navigator>
  );
}

export default AddRecordNavigator;
