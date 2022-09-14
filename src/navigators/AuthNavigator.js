import React from 'react';
import MainNavigator from './MainNavigator';
import tw from '../lib/tailwind';
import AddRecordPage from '../pages/AddRecordPage';
import EditRecordPage from '../pages/EditRecordPage';
import {createStackNavigator} from '@react-navigation/stack';
import forPopUpModal from '../lib/forPopUpModal';
import CopyTagModal from '../modals/CopyTagModal';
import EraseTagModal from '../modals/EraseTagModal';
import LockTagModal from '../modals/LockTagModal';
import ReadMemoryModal from '../modals/ReadMemoryModal';
import FormatMemoryModal from '../modals/FormatMemoryModal';
import SetPasswordModal from '../modals/SetPasswordModal';
import RemovePasswordModal from '../modals/RemovePasswordModal';
import SuccessAlertModal from '../modals/SuccessAlertModal';
import AdvancedCommandsModal from '../modals/AdvancedCommandsModal';

const Stack = createStackNavigator();

const popUpModalScreenOptions = {
  cardStyleInterpolator: forPopUpModal,
  presentation: 'transparentModal',
};

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: true,
        cardStyle: tw`bg-transparent`,
        contentStyle: tw`bg-transparent`,
        headerStyle: tw`bg-primary/100 dark:bg-secondary/50`,
        headerTintColor: tw.color('lighter'),
        headerTitle: '',
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddRecordPage"
        component={AddRecordPage}
        options={{
          cardStyle: tw`bg-white`,
          headerShown: true,
          headerTitle: 'Write',
          headerStyle: tw`bg-lighter dark:bg-secondary shadow-md`,
          headerTintColor: tw.color('primary'),
        }}
      />
      <Stack.Screen name="EditRecordPage" component={EditRecordPage} />
      <Stack.Screen
        name="CopyTagModal"
        component={CopyTagModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="EraseTagModal"
        component={EraseTagModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="LockTagModal"
        component={LockTagModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="ReadMemoryModal"
        component={ReadMemoryModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="FormatMemoryModal"
        component={FormatMemoryModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="SetPasswordModal"
        component={SetPasswordModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="RemovePasswordModal"
        component={RemovePasswordModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="SuccessAlertModal"
        component={SuccessAlertModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="AdvancedCommandsModal"
        component={AdvancedCommandsModal}
        options={popUpModalScreenOptions}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
