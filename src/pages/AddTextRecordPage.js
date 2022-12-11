import React from 'react';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import AddRecordForm from '../components/AddRecordForm';
import ValidatedComponent from '../components/ValidatedComponent';
import * as recordActions from '../store/record/record.actions';
import {TEXT_RECORD} from '../lib/consts';
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
    inputText.current && inputText.current.focus();
  }, []);
  const onPressCancel = () => navigation.goBack();
  const onPressSave = async () => {
    const validation = new Validator(formData, formRules);
    if (validation.passes()) {
      setFormErrors(null);
      dispatch(recordActions.createRecord(TEXT_RECORD, formData));
      navigation.navigate('WritePage');
    } else {
      setFormErrors(validation.errors.all());
    }
  };
  // const writeNdef = async text => {
  //   const textRecord = Ndef.textRecord(text);
  //   const bytes = Ndef.encodeMessage([textRecord]);
  //
  //   try {
  //     await NfcManager.requestTechnology(NfcTech.Ndef);
  //     await NfcManager.ndefHandler.writeNdefMessage(bytes);
  //   } catch (ex) {
  //     // bypass
  //   } finally {
  //     await NfcManager.cancelTechnologyRequest();
  //   }
  // };
  return (
    <AddRecordForm
      record={TEXT_RECORD}
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
