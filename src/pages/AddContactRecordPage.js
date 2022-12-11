import React from 'react';
import {TextInput} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';
import {CONTACT_RECORD} from '../lib/consts';
import AddRecordForm from '../components/AddRecordForm';
import {useDispatch} from 'react-redux';
import * as recordActions from '../store/record/record.actions';
import Validator from '../lib/Validator';
import ValidatedComponent from '../components/ValidatedComponent';

function AddContactRecordPage({navigation}) {
  const dispatch = useDispatch();
  const inputName = React.useRef(null);
  const inputCompany = React.useRef(null);
  const inputAddress = React.useRef(null);
  const inputPhone = React.useRef(null);
  const inputMail = React.useRef(null);
  const inputWebsite = React.useRef(null);
  const formRules = {
    name: 'required',
    phone: 'required',
    mail: 'email',
    website: 'url',
  };
  const [name, setName] = React.useState(null);
  const [company, setCompany] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [mail, setMail] = React.useState(null);
  const [website, setWebsite] = React.useState(null);
  const formData = {
    name,
    company,
    address,
    phone,
    mail,
    website,
  };
  const [formErrors, setFormErrors] = React.useState();
  React.useEffect(() => {
    inputName.current && inputName.current.focus();
  }, []);
  const onPressCancel = () => navigation.goBack();
  const onPressSave = () => {
    const validation = new Validator(formData, formRules);
    if (validation.passes()) {
      setFormErrors(null);
      dispatch(recordActions.createRecord(CONTACT_RECORD, formData));
      navigation.navigate('WritePage');
    } else {
      setFormErrors(validation.errors.all());
    }
  };
  return (
    <AddRecordForm
      record={CONTACT_RECORD}
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
              onSubmitEditing={() => inputCompany.current.focus()}
              style={style}
              placeholder="Linda Martins"
              placeholderTextColor={tw.color('placeholder/50')}
              returnKeyType="next"
            />
          </Label>
        )}
      />
      <ValidatedComponent
        name="company"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Company" style={tw`mt-5`}>
            <TextInput
              ref={inputCompany}
              style={style}
              value={company}
              onChangeText={setCompany}
              onSubmitEditing={() => inputAddress.current.focus()}
              placeholder="RazorLabs"
              placeholderTextColor={tw.color('placeholder/50')}
              returnKeyType="next"
            />
          </Label>
        )}
      />
      <ValidatedComponent
        name="address"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Address" style={tw`mt-5`}>
            <TextInput
              ref={inputAddress}
              style={style}
              value={address}
              onChangeText={setAddress}
              onSubmitEditing={() => inputPhone.current.focus()}
              placeholder="73, 3rd Avenue FHA phase 1, Abuja"
              placeholderTextColor={tw.color('placeholder/50')}
              returnKeyType="next"
            />
          </Label>
        )}
      />
      <ValidatedComponent
        name="phone"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Phone Number" style={tw`mt-5`}>
            <TextInput
              ref={inputPhone}
              style={style}
              value={phone}
              onChangeText={setPhone}
              onSubmitEditing={() => inputMail.current.focus()}
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
        name="mail"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Email" style={tw`mt-5`}>
            <TextInput
              ref={inputMail}
              style={style}
              value={mail}
              onChangeText={setMail}
              onSubmitEditing={() => inputWebsite.current.focus()}
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
        name="website"
        errors={formErrors}
        style={tw`input`}
        renderComponent={style => (
          <Label title="Website" style={tw`mt-5`}>
            <TextInput
              ref={inputWebsite}
              style={style}
              value={website}
              onChangeText={setWebsite}
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
