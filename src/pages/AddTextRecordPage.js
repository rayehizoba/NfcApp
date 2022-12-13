import React from 'react';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import AddRecordForm from '../components/AddRecordForm';
import ValidatedComponent from '../components/ValidatedComponent';
import * as recordActions from '../store/record/record.actions';
import {TEXT, TEXT_RECORD, TYPE_ICON_MAP} from '../lib/consts';
import Validator from '../lib/Validator';
import tw from '../lib/tailwind';

function AddTextRecordPage({navigation}) {
  const dispatch = useDispatch();
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
    requestAnimationFrame(() => {
      inputText.current && inputText.current.focus();
    });
  }, []);

  const onPressCancel = () => navigation.goBack();
  const onPressSave = async () => {
    const validation = new Validator(formData, formRules);
    if (validation.passes()) {
      setFormErrors(null);
      dispatch(recordActions.writeNdef({type: TEXT, data: formData.text}));
      navigation.navigate('WritePage');
    } else {
      setFormErrors(validation.errors.all());
    }
  };

  return (
    <AddRecordForm
      icon={TYPE_ICON_MAP[TEXT]}
      title="Enter your text"
      onPressCancel={onPressCancel}
      onPressSave={onPressSave}>
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
            placeholder=""
            multiline
          />
        )}
      />
    </AddRecordForm>
  );
}

export default AddTextRecordPage;
