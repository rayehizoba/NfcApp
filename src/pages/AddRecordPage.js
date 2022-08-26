import React from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import Contacts from '../assets/img/contacts.svg';
import Magnify from '../assets/img/magnify.svg';
import tw from '../lib/tailwind';
import Plus from '../assets/img/plus-icon.svg';
import Mail from '../assets/img/mail.svg';
import Website from '../assets/img/website.svg';
import {useAppColorScheme} from 'twrnc';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Recommended',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Contact Info',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Social Media',
  },
];

const iconSize = 24;

const Item = ({title}) => {
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <View style={tw`px-5 pb-5`}>
      <Text style={tw`text-2xl text-darker dark:text-lighter`}>{title}</Text>

      <View style={tw`my-2 rounded border border-green`}>
        <Pressable style={tw`p-2 px-3`} android_ripple={{borderless: false}}>
          <View style={tw`flex-row items-center`}>
            <Contacts width={iconSize} height={iconSize} />
            <Text style={tw`text-darker dark:text-lighter text-lg mx-3`}>
              Contact Number
            </Text>
            <View style={tw`ml-auto mr-3`}>
              <Plus
                stroke={tw.color(isDarkMode ? 'lighter' : 'dark')}
                width={20}
                height={20}
              />
            </View>
          </View>
        </Pressable>
      </View>

      <View style={tw`my-2 rounded border border-gray dark:border-lighter/40`}>
        <Pressable style={tw`p-2 px-3`} android_ripple={{borderless: false}}>
          <View style={tw`flex-row items-center`}>
            <Mail width={iconSize} height={iconSize} />
            <Text style={tw`text-darker dark:text-lighter text-lg mx-3`}>
              Email
            </Text>
            <View style={tw`ml-auto mr-3`}>
              <Plus
                stroke={tw.color(isDarkMode ? 'lighter' : 'dark')}
                width={20}
                height={20}
              />
            </View>
          </View>
        </Pressable>
      </View>

      <View style={tw`my-2 rounded border border-gray dark:border-lighter/40`}>
        <Pressable style={tw`p-2 px-3`} android_ripple={{borderless: false}}>
          <View style={tw`flex-row items-center`}>
            <Website width={iconSize} height={iconSize} />
            <Text style={tw`text-darker dark:text-lighter text-lg mx-3`}>
              Website
            </Text>
            <View style={tw`ml-auto mr-3`}>
              <Plus
                stroke={tw.color(isDarkMode ? 'lighter' : 'dark')}
                width={20}
                height={20}
              />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const ListHeaderComponent = props => (
  <View style={tw`p-5`}>
    <Text style={tw`text-2xl text-darker dark:text-lighter font-semibold`}>
      Add a record
    </Text>
    <Text style={tw`text-darker dark:text-lighter opacity-50`}>
      Add links to your personal profile
    </Text>

    <View style={tw`relative my-10`}>
      <View
        style={tw`absolute inset-y-0 flex items-center justify-center w-10`}>
        <Magnify />
      </View>
      <TextInput
        style={tw`input pl-10`}
        placeholder="Search Links"
        placeholderTextColor={tw.color('placeholder/50')}
      />
    </View>
  </View>
);

function AddRecordPage(props) {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default AddRecordPage;
