import {Pressable, Text, TextInput, View, ScrollView} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import Validator from '../lib/Validator';
import {TEXT_RECORD} from '../lib/consts';
import ValidatedComponent from '../components/ValidatedComponent';

function AddTextRecordPage({navigation}) {
  const inputText = React.useRef(null);
  const formRules = {
    text: 'required',
  };
  const [text, setText] = React.useState(null);
  const formData = {
    text,
  };
  const [formErrors, setFormErrors] = React.useState();
  React.useEffect(() => {
    inputText.current && inputText.current.focus();
  }, []);
  const onPressCancel = () => navigation.goBack();
  const onPressSave = () => {
    const validation = new Validator(formData, formRules);
    if (validation.passes()) {
      setFormErrors(null);

    } else {
      setFormErrors(validation.errors.all());
    }
  };
  return (
    <ScrollView contentContainerStyle={tw`flex-col flex-1`}>
      <View style={tw`bg-white shadow-md p-4 pt-2 flex-row items-center`}>
        {React.createElement(TEXT_RECORD.icon, {
          width: 21,
          height: 21,
        })}
        <Text style={tw`ml-8 text-dark`}>Enter your text</Text>
      </View>

      <View style={tw`flex-1 p-4`}>
        <ValidatedComponent
          name="text"
          errors={formErrors}
          style={tw`input`}
          renderComponent={style => (
            <TextInput
              ref={inputText}
              value={text}
              onChangeText={setText}
              style={style}
              placeholder="Hello !"
              onSubmitEditing={onPressSave}
            />
          )}
        />
      </View>

      <View style={tw`flex-row p-4`}>
        <Pressable
          onPress={onPressCancel}
          style={tw`btn mr-5 flex-1`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-lighter uppercase font-semibold`}>Cancel</Text>
        </Pressable>
        <Pressable
          onPress={onPressSave}
          style={tw`btn flex-1`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-lighter uppercase font-semibold`}>Save</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default AddTextRecordPage;
