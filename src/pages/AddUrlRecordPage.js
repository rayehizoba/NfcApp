import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFloating, shift, offset} from '@floating-ui/react-native';
import tw from '../lib/tailwind';
import AddRecordForm from '../components/AddRecordForm';
import {TYPE_ICON_MAP, URI, URI_RECORD} from '../lib/consts';
import {useDispatch} from 'react-redux';
import Validator from '../lib/Validator';
import * as recordActions from '../store/record/record.actions';
import ValidatedComponent from '../components/ValidatedComponent';

function AddUrlRecordPage({navigation}) {
  const dispatch = useDispatch();
  const inputUrl = React.useRef(null);
  const {x, y, reference, floating} = useFloating({
    placement: 'bottom-start',
    middleware: [shift(), offset(5)],
  });
  const options = [
    {label: 'http://', value: 'http://'},
    {label: 'https://', value: 'https://'},
  ];
  const [option, setOption] = React.useState(options[0]);
  const [showOptions, setShowOptions] = React.useState(false);
  const formRules = {
    url: 'url',
  };
  const [url, setUrl] = React.useState(null);
  const formData = {
    url: option.value + url,
  };
  const [formErrors, setFormErrors] = React.useState();

  React.useEffect(() => {
    requestAnimationFrame(() => {
      inputUrl.current && inputUrl.current.focus();
    });
  }, [option]);

  const onPressOption = option => () => {
    setOption(option);
    setShowOptions(false);
  };
  const onPressCancel = () => navigation.goBack();
  const onPressSave = () => {
    const validation = new Validator(formData, formRules);
    if (validation.passes()) {
      setFormErrors(null);
      dispatch(recordActions.writeNdef({type: URI, data: formData.url}));
      navigation.navigate('WritePage');
    } else {
      setFormErrors(validation.errors.all());
      // console.warn(formData);
    }
  };
  return (
    <AddRecordForm
      title="Enter your URL"
      icon={TYPE_ICON_MAP[URL]}
      onPressCancel={onPressCancel}
      onPressSave={onPressSave}
      contentContainerStyle={tw`flex-1`}>
      <ValidatedComponent
        name="url"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <View style={tw`flex-row`}>
            <Pressable onPress={() => setShowOptions(!showOptions)}>
              <View
                ref={reference}
                style={[style, tw`mr-4 flex-row items-center`]}>
                <Text>{option.value}</Text>
                <Icon name="chevron-down" style={tw`text-xl ml-5`} />
              </View>
            </Pressable>
            {showOptions && (
              <View
                ref={floating}
                style={[
                  tw`absolute bg-white rounded shadow-lg z-10`,
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
              ref={inputUrl}
              style={[style, tw`flex-1`]}
              value={url}
              onChangeText={setUrl}
              placeholder="www.fastdev.com"
              placeholderTextColor={tw.color('placeholder/50')}
              onSubmitEditing={onPressSave}
              autoCapitalize="none"
              keyboardType="url"
            />
          </View>
        )}
      />
    </AddRecordForm>
  );
}

export default AddUrlRecordPage;
