import React from 'react';
import { Image,  StyleSheet, Text, View, Button, FlatList} from 'react-native';
import tw from '../lib/tailwind';
import Rocket from '../assets/img/rocket.svg';

function ProEdition(props) {
  const iconSize = 20;
  return (
    <View style={tw`p-10 flex-col items-center`}>
      <View
        style={tw`w-5 aspect-square mt-16 flex items-center justify-center`}>
        <Rocket />
      </View>
      <Text style={tw`text-lg mt-15 text-dark dark:text-lighter`}>
      Upgrade to the Pro Edition and unlock all 
      </Text>
      <Text style={tw`text-lg mt-0.1 text-dark dark:text-lighter`}> 
      features of this app
      </Text>
      <View style={{justifyContent:'space-between', padding:20, marginBottom: 10}}>
      <Text style={{ fontSize: 17}}>{`\u25CF`} Edit your NFC tag memory</Text>
      <Text style={{ fontSize: 17}}>{`\u25CF`} Import from NFC tag</Text>
      <Text style={{ fontSize: 17}}>{`\u25CF`} Import from a QR codeEdit your NFC tag memory</Text>
      <Text style={{ fontSize: 17}}>{`\u25CF`} Save and Load your tags</Text>
      <Text style={{ fontSize: 17}}>{`\u25CF`} More upcoming features include</Text>
      </View>
  
      <Button 
        size="md"
        title="$ 5.99" 
      />
    </View>
    
 );
}


export default ProEdition;
