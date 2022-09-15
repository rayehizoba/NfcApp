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
import ClearCurrentRecordsModal from '../modals/ClearCurrentRecordsModal';
import ImportFromNFCTagModal from '../modals/ImportFromNFCTagModal';
import ImportFromQRCodeModal from '../modals/ImportFromQRCodeModal';
import ScanTagModal from '../modals/ScanTagModal';

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
      <Stack.Screen name="AddRecordPage" component={AddRecordPage} />
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
        name="ClearCurrentRecordsModal"
        component={ClearCurrentRecordsModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="ImportFromNFCTagModal"
        component={ImportFromNFCTagModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="ImportFromQRCodeModal"
        component={ImportFromQRCodeModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="ScanTagModal"
        component={ScanTagModal}
        options={popUpModalScreenOptions}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
