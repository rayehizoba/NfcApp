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

const Tab = createBottomTabNavigator();

function MainNavigator(props) {
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case 'Read':
              return <Read stroke={color} width={size} height={size} />;

            case 'Write':
              return <Write stroke={color} width={size} height={size} />;

            case 'Other':
              return <Other stroke={color} width={size} height={size} />;

            case 'Settings':
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
        headerRight: ({tintColor}) => {
          return (
            <Pressable style={tw`p-5`} android_ripple={{borderless: true}}>
              <MessageQuestion stroke={tintColor} width={24} height={24} />
            </Pressable>
          );
        },
      })}
      sceneContainerStyle={tw`bg-lighter dark:bg-darker`}>
      <Tab.Screen
        name="Read"
        component={ReadPage}
        options={{headerTitle: props => <LogoTitle {...props} />}}
      />
      <Tab.Screen name="Write" component={WritePage} />
      <Tab.Screen name="Other" component={OtherPage} />
      <Tab.Screen name="Settings" component={OtherPage} />
    </Tab.Navigator>
  );
}

export default MainNavigator;
