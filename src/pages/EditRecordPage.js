import React from 'react';
import {Text, View} from 'react-native';
import tw from '../lib/tailwind';

function EditRecordPage(props) {
  return (
    <View style={tw``}>
      <View style={tw`bg-green px-5 py-2`}>
        <Text style={tw``}>Enter your contact</Text>
      </View>
      <View style={tw`p-5 py-10`}>

      </View>
    </View>
  );
}

export default EditRecordPage;
