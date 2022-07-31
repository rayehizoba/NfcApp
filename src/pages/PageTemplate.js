import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import MessageQuestion from '../assets/img/message-question.svg';
import NfcTools from '../assets/img/nfctools.svg';
import Read from '../assets/img/note-remove.svg';
import Write from '../assets/img/edit.svg';
import Other from '../assets/img/scanning.svg';
import Setting from '../assets/img/setting.svg';
import tw from '../lib/tailwind';
import {useAppColorScheme} from 'twrnc';

function PageTemplate(props) {
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';

  const header = (
    <View
      style={tw`bg-primary/100 dark:bg-secondary/50 flex items-center px-3`}>
      <View></View>
      <Pressable style={tw`ml-auto p-5`} android_ripple={{borderless: true}}>
        <MessageQuestion width={20} height={20} />
      </Pressable>
    </View>
  );

  const footer = (
    <View style={tw`bg-neutral/50 dark:bg-secondary/50`}>
      <View
        style={tw`flex-row items-center justify-between w-full max-w-md mx-auto px-3`}>
        <Pressable
          style={tw`flex-col items-center p-5 pt-2`}
          android_ripple={{borderless: true}}>
          <Read
            stroke={tw.color(isDarkMode ? 'primary' : 'accent')}
            width={20}
            height={20}
          />
          <Text
            style={tw`text-2xs mt-2 text-accent dark:text-primary font-semibold`}>
            Read
          </Text>
        </Pressable>

        <Pressable
          style={tw`flex-col items-center p-5 pt-2`}
          android_ripple={{borderless: true}}>
          <Write
            stroke={tw.color(isDarkMode ? 'lighter' : 'dark')}
            width={20}
            height={20}
          />
          <Text style={tw`text-2xs mt-2 text-dark dark:text-lighter`}>
            Write
          </Text>
        </Pressable>

        <Pressable
          style={tw`flex-col items-center p-5 pt-2`}
          android_ripple={{borderless: true}}>
          <Other
            stroke={tw.color(isDarkMode ? 'lighter' : 'dark')}
            width={20}
            height={20}
          />
          <Text style={tw`text-2xs mt-2 text-dark dark:text-lighter`}>
            Other
          </Text>
        </Pressable>

        <Pressable
          style={tw`flex-col items-center p-5 pt-2`}
          android_ripple={{borderless: true}}>
          <Setting
            stroke={tw.color(isDarkMode ? 'lighter' : 'dark')}
            width={20}
            height={20}
          />
          <Text style={tw`text-2xs mt-2 text-dark dark:text-lighter`}>
            Settings
          </Text>
        </Pressable>
      </View>
    </View>
  );

  const body = (
    <View style={tw`flex-col items-center`}>
      <Text style={tw`text-lg font-semibold text-dark dark:text-lighter`}>
        Welcome to razorLabs!
      </Text>
      <View
        style={tw`w-30 aspect-square rounded-full shadow-xl shadow-accent bg-accent mt-16 flex items-center justify-center`}>
        <NfcTools />
      </View>
      <Text style={tw`text-lg mt-3 text-dark dark:text-lighter`}>
        Approach an NFC Tag
      </Text>
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      {header}
      <ScrollView contentContainerStyle={tw`flex-1 p-5`}>{body}</ScrollView>
      {footer}
    </View>
  );
}

export default PageTemplate;
