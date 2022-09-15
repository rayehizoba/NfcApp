import React from 'react';
import {Pressable, Text, View} from 'react-native';
import AddCircle from '../assets/img/add-circle.svg';
import MoreCircle from '../assets/img/more-circle.svg';
import Edit from '../assets/img/edit.svg';
import tw from '../lib/tailwind';


function MoreOptions(props) {
  const iconSize = 20;
  return (
    <View style={tw`p-5`}>

    {/* Clear Current Records */}
      <Pressable
        onPress={() => props.navigation.navigate('ClearCurrentRecordsModal')}
        style={tw`my-1.5 rounded overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <AddCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Clear current records</Text>
      </Pressable>

    {/* Import From NFC Tag */}
      <Pressable
       onPress={() => props.navigation.navigate('ImportFromNFCTagModal')}
        style={tw`my-1.5 rounded overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <MoreCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Import from NFC tag</Text>
      </Pressable>

    {/* Import From QR Code */}
      <Pressable
       onPress={() => props.navigation.navigate('ImportFromQRCodeModal')}
        style={tw`my-1.5 rounded overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <Edit width={iconSize} height={iconSize} color/>
        <Text style={tw`ml-3 text-lighter`}>Import from QR code</Text>
      </Pressable>

    {/* Scan Tag */}
      <Pressable
       onPress={() => props.navigation.navigate('ScanTagModal')}
        style={tw`my-1.5 rounded overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
        android_ripple={{borderless: false}}>
        <AddCircle width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Scan Tag</Text>
      </Pressable>

    </View>
  );
}

export default MoreOptions;
