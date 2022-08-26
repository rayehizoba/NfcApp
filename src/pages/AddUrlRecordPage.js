import React from 'react';
import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFloating, shift, offset} from '@floating-ui/react-native';
import useKeyboardVisible from '../lib/useKeyboardVisible';
import tw from '../lib/tailwind';

function AddUrlRecordPage(props) {
  const keyboardVisible = useKeyboardVisible();
  const {x, y, reference, floating} = useFloating({
    placement: 'bottom-start',
    middleware: [shift(), offset(5)],
  });
  const options = [
    {label: 'http://', value: 'http://'},
    {label: 'https://', value: 'https://'},
  ];
  const [option, setOption] = React.useState(options[0]);
  const onPressOption = option => () => {
    setOption(option);
    setShowOptions(false);
  };
  const [showOptions, setShowOptions] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={tw`p-5 flex-col flex-1`}>
      <View style={tw`flex-1`}>
        <View style={tw`flex-row`}>
          <Pressable onPress={() => setShowOptions(!showOptions)}>
            <View ref={reference} style={tw`input mr-5 flex-row items-center`}>
              <Text>{option.value}</Text>
              <Icon name="chevron-down" style={tw`text-xl ml-5`} />
            </View>
          </Pressable>
          {showOptions && (
            <View
              ref={floating}
              style={[
                tw`absolute bg-white rounded shadow-lg`,
                {top: y ?? 0, left: x ?? 0},
              ]}>
              {options.map(({label, value}) => (
                <Pressable
                  key={value}
                  onPress={onPressOption({label, value})}
                  style={tw`p-2 px-4 border-b border-lighter`}>
                  <Text>{label}</Text>
                </Pressable>
              ))}
            </View>
          )}
          <TextInput
            style={tw`input flex-1`}
            placeholder="www.fastdev.com"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </View>
      </View>

      {keyboardVisible || (
        <View style={tw`flex-row`}>
          <Pressable
            style={tw`btn mr-5 flex-1`}
            android_ripple={{borderless: false}}>
            <Text style={tw`text-lighter uppercase font-semibold`}>Cancel</Text>
          </Pressable>
          <Pressable
            style={tw`btn flex-1`}
            android_ripple={{borderless: false}}>
            <Text style={tw`text-lighter uppercase font-semibold`}>Save</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

export default AddUrlRecordPage;
