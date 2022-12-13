import React from 'react';
import MainNavigator from './MainNavigator';
import tw from '../lib/tailwind';
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
import ProEditionPage from '../pages/ProEditionPage';
import AppInfoPage from '../pages/AppInfoPage';
import {useAppColorScheme} from 'twrnc';
import AddRecordNavigator from './AddRecordNavigator';
import WriteTagModal from '../modals/WriteTagModal';
import NdefRecordMenuModal from '../modals/NdefRecordMenuModal';
import MoreOptionsPage from '../pages/MoreOptionsPage';
import ClearRecordsModal from '../modals/ClearRecordsModal';
import ReadTagModal from '../modals/ReadTagModal';
import NfcManager from 'react-native-nfc-manager';
import {useDispatch} from 'react-redux';
import * as appActions from '../store/app/app.actions';
import ProEditionUpgradeModal from '../modals/ProEditionUpgradeModal';

const Stack = createStackNavigator();

const popUpModalScreenOptions = {
  cardStyleInterpolator: forPopUpModal,
  presentation: 'transparentModal',
};

function AuthNavigator() {
  const dispatch = useDispatch();
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';

  React.useEffect(() => {
    async function checkNfc() {
      const supported = await NfcManager.isSupported();
      if (supported) {
        await NfcManager.start();
      }
      dispatch(appActions.setHasNfc(supported));
    }
    checkNfc();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: true,
        cardStyle: tw`bg-transparent`,
        contentStyle: tw`bg-transparent`,
        // headerStyle: tw`bg-primary/100 dark:bg-secondary/50`,
        // headerTintColor: tw.color('lighter'),
        // headerTitle: '',
        // headerShadowVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddRecordNavigator"
        component={AddRecordNavigator}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="MoreOptionsPage"
        component={MoreOptionsPage}
        options={{
          cardOverlayEnabled: true,
          cardStyle: isDarkMode ? tw`bg-darker` : tw`bg-white`,
          contentStyle: tw`bg-transparent`,
          headerStyle: tw`bg-white dark:bg-secondary shadow-md`,
          headerTintColor: tw.color(isDarkMode ? 'lighter' : 'primary'),
          headerTitle: 'More Options',
          headerShown: true,
        }}
      />
      <Stack.Screen name="ProEditionPage" component={ProEditionPage} />
      <Stack.Screen name="AppInfoPage" component={AppInfoPage} />

      {/* Modals */}
      <Stack.Screen
        name="ProEditionUpgradeModal"
        component={ProEditionUpgradeModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="ReadTagModal"
        component={ReadTagModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="ClearRecordsModal"
        component={ClearRecordsModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="NdefRecordMenuModal"
        component={NdefRecordMenuModal}
        options={popUpModalScreenOptions}
      />
      <Stack.Screen
        name="WriteTagModal"
        component={WriteTagModal}
        options={popUpModalScreenOptions}
      />
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
