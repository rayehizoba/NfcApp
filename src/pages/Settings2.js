import React from 'react';
import { Image,  StyleSheet, Text, View} from 'react-native';
import tw from '../lib/tailwind';

function Settings2(props) {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', padding:10}}>
    <View style={{flex: 1}}>
    <Text style={{fontWeight: "bold"}}>Version</Text>
    <Text style={{fontWeight: "bold"}}>Website</Text>
    <Text style={{fontWeight: "bold"}}>Report a bug</Text>
    <Text style={{fontWeight: "bold"}}>Term of use</Text>
    <Text style={{fontWeight: "bold"}}>Developed by</Text>
    </View>
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'right', fontWeight: "bold"}}>1.0</Text>
      <Text style={{textAlign: 'right', fontWeight: "bold"}}>razorlabs.tech</Text>
      <Text style={{textAlign: 'right', fontWeight: "bold"}}>razorlabs.tech</Text>
      <Text style={{textAlign: 'right', fontWeight: "bold"}}>razorlabs.tech</Text>
      <Text style={{textAlign: 'right', fontWeight: "bold"}}>Razorlabs</Text>
    </View>
  </View>
);
}

export default Settings2;
