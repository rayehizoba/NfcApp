import React from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import Magnify from '../assets/img/magnify.svg';
import tw from '../lib/tailwind';
import Plus from '../assets/img/plus-icon.svg';
import {useAppColorScheme} from 'twrnc';
import {RECORD_TYPES} from '../lib/consts';
import {useNavigation} from '@react-navigation/native';

const iconSize = 24;

const Item = ({title, types}) => {
  const navigation = useNavigation();
  const [colorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  return (
    <View style={tw`px-5 pb-5`}>
      <Text style={tw`text-2xl text-darker dark:text-lighter`}>{title}</Text>
      {types.map(({icon, name}) => (
        <View style={tw`my-2 rounded border border-green`}>
          <Pressable
            onPress={() => navigation.navigate('EditRecordPage')}
            style={tw`p-2 px-3`}
            android_ripple={{borderless: false}}>
            <View style={tw`flex-row items-center`}>
              {React.createElement(icon, {width: iconSize, height: iconSize})}
              <Text style={tw`text-darker dark:text-lighter text-lg mx-3`}>
                {name}
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
      ))}
    </View>
  );
};

const ListHeaderComponent = props => (
  <View style={tw`p-5`}>
    {/*<Text style={tw`text-2xl text-darker dark:text-lighter font-semibold`}>*/}
    {/*  Add a record*/}
    {/*</Text>*/}
    {/*<Text style={tw`text-darker dark:text-lighter opacity-50`}>*/}
    {/*  Add links to your personal profile*/}
    {/*</Text>*/}
    <View style={tw`relative`}>
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
  const renderItem = ({item}) => <Item title={item.title} types={item.types} />;
  return (
    <FlatList
      data={RECORD_TYPES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

export default AddRecordPage;
