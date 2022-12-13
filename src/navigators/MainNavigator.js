import React from 'react';
import {Pressable} from 'react-native';
import {useAppColorScheme} from 'twrnc';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tw from '../lib/tailwind';
import Read from '../assets/img/note-remove.svg';
import Write from '../assets/img/edit.svg';
import Other from '../assets/img/scanning.svg';
import Setting from '../assets/img/setting.svg';
import MessageQuestion from '../assets/img/message-question.svg';
import ReadPage from '../pages/ReadPage';
import WritePage from '../pages/WritePage';
import OtherPage from '../pages/OtherPage';
import LogoTitle from '../components/LogoTitle';
import SettingsPage from '../pages/SettingsPage';

const Tab = createBottomTabNavigator();

function MainNavigator(props) {
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <Tab.Navigator
      // initialRouteName="WritePage"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case 'ReadPage':
              return <Read stroke={color} width={size} height={size} />;

            case 'WritePage':
              return <Write stroke={color} width={size} height={size} />;

            case 'OtherPage':
              return <Other stroke={color} width={size} height={size} />;

            case 'SettingsPage':
              return <Setting stroke={color} width={size} height={size} />;

            default:
              return null;
          }
        },
        tabBarActiveTintColor: tw.color(isDarkMode ? 'primary' : 'accent'),
        tabBarInactiveTintColor: tw.color(isDarkMode ? 'lighter' : 'darker'),
        tabBarStyle: tw`bg-lighter dark:bg-darker border-t-0`,
        tabBarItemStyle: tw`dark:bg-secondary/50`,
        headerStyle: tw`bg-lighter dark:bg-secondary shadow-md`,
        headerTintColor: tw.color(isDarkMode ? 'lighter' : 'primary'),
        headerRight: ({tintColor}) => (
          <Pressable style={tw`p-5`} android_ripple={{borderless: true}}>
            <MessageQuestion stroke={tintColor} width={24} height={24} />
          </Pressable>
        ),
        headerTitleStyle: tw`font-normal`,
      })}
      sceneContainerStyle={tw`bg-lighter dark:bg-darker`}>
      <Tab.Screen
        name="ReadPage"
        component={ReadPage}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          tabBarLabel: 'Read',
        }}
      />
      <Tab.Screen
        name="WritePage"
        component={WritePage}
        options={{tabBarLabel: 'Write', headerTitle: 'Write'}}
      />
      <Tab.Screen
        name="OtherPage"
        component={OtherPage}
        options={{tabBarLabel: 'Other', headerTitle: 'Other'}}
      />
      <Tab.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{tabBarLabel: 'Settings', headerTitle: 'Settings'}}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
