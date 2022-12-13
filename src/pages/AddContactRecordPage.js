import React from 'react';
import {TextInput} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import {TYPE_ICON_MAP, VCARD} from '../lib/consts';
import AddRecordForm from '../components/AddRecordForm';
import {useDispatch} from 'react-redux';
import * as recordActions from '../store/record/record.actions';
import Validator from '../lib/Validator';
import ValidatedComponent from '../components/ValidatedComponent';

function AddContactRecordPage({navigation}) {
  const dispatch = useDispatch();
  const inputName = React.useRef(null);
  const inputOrg = React.useRef(null);
  const inputAdr = React.useRef(null);
  const inputTel = React.useRef(null);
  const inputEmail = React.useRef(null);
  const inputUrl = React.useRef(null);
  const formRules = {
    name: 'required',
    tel: 'required_without:email',
    email: 'email|required_without:tel',
    url: 'url',
  };
  const [name, setName] = React.useState(null);
  const [org, setOrg] = React.useState(null);
  const [tel, setTel] = React.useState(null);
  const [adr, setAdr] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [url, setUrl] = React.useState(null);
  const formData = {
    name,
    org,
    adr,
    tel,
    email,
    url,
  };
  const [formErrors, setFormErrors] = React.useState();

  React.useEffect(() => {
    requestAnimationFrame(() => {
      inputName.current && inputName.current.focus();
    });
  }, []);

  const onPressCancel = () => navigation.goBack();
  const onPressSave = () => {
    const validation = new Validator(formData, formRules);
    if (validation.passes()) {
      setFormErrors(null);
      dispatch(recordActions.writeNdef({type: VCARD, data: formData}));
      navigation.navigate('WritePage');
    } else {
      setFormErrors(validation.errors.all());
    }
  };

  return (
    <AddRecordForm
      icon={TYPE_ICON_MAP[VCARD]}
      title="Enter your contact"
      onPressCancel={onPressCancel}
      onPressSave={onPressSave}>
      <ValidatedComponent
        name="name"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Contact Name">
            <TextInput
              ref={inputName}
              value={name}
              onChangeText={setName}
              onSubmitEditing={() => inputOrg.current.focus()}
              style={style}
              placeholder="Linda Martins"
              placeholderTextColor={tw.color('placeholder/50')}
              returnKeyType="next"
            />
          </Label>
        )}
      />
      <ValidatedComponent
        name="org"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Company" style={tw`mt-5`}>
            <TextInput
              ref={inputOrg}
              style={style}
              value={org}
              onChangeText={setOrg}
              onSubmitEditing={() => inputAdr.current.focus()}
              placeholder="RazorLabs"
              placeholderTextColor={tw.color('placeholder/50')}
              returnKeyType="next"
            />
          </Label>
        )}
      />
      <ValidatedComponent
        name="adr"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Address" style={tw`mt-5`}>
            <TextInput
              ref={inputAdr}
              style={style}
              value={adr}
              onChangeText={setAdr}
              onSubmitEditing={() => inputTel.current.focus()}
              placeholder="73, 3rd Avenue FHA phase 1, Abuja"
              placeholderTextColor={tw.color('placeholder/50')}
              returnKeyType="next"
            />
          </Label>
        )}
      />
      <ValidatedComponent
        name="tel"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Phone Number" style={tw`mt-5`}>
            <TextInput
              ref={inputTel}
              style={style}
              value={tel}
              onChangeText={setTel}
              onSubmitEditing={() => inputEmail.current.focus()}
              placeholder="+2347041259889"
              placeholderTextColor={tw.color('placeholder/50')}
              returnKeyType="next"
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              autoCompleteType="tel"
            />
          </Label>
        )}
      />
      <ValidatedComponent
        name="email"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Email" style={tw`mt-5`}>
            <TextInput
              ref={inputEmail}
              style={style}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={() => inputUrl.current.focus()}
              placeholder="abc123@xyz.com"
              placeholderTextColor={tw.color('placeholder/50')}
              returnKeyType="next"
              textContentType="emailAddress"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </Label>
        )}
      />
      <ValidatedComponent
        name="url"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Website" style={tw`mt-5`}>
            <TextInput
              ref={inputUrl}
              style={style}
              value={url}
              onChangeText={setUrl}
              onSubmitEditing={onPressSave}
              placeholder="https://www.razorlabs.com"
              placeholderTextColor={tw.color('placeholder/50')}
              autoCapitalize="none"
              keyboardType="url"
            />
          </Label>
        )}
      />
    </AddRecordForm>
  );
}

export default AddContactRecordPage;
