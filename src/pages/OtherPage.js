import React from 'react';
import {Pressable, Text, View} from 'react-native';
import tw from '../lib/tailwind';
import DocumentCopy from '../assets/img/document-copy.svg';
import DocumentCopyInfinity from '../assets/img/document-copy-infinity.svg';
import Trash from '../assets/img/trash.svg';
import Lock from '../assets/img/lock.svg';
import MemoryCard from '../assets/img/memory-card.svg';
import MemoryCardTrash from '../assets/img/memory-card-trash.svg';
import Key from '../assets/img/key.svg';
import KeyCancel from '../assets/img/key-cancel.svg';
import MemoryOutline from '../assets/img/memory-outline.svg';

const iconSize = 20;

function OtherPage(props) {
  const itemStyle = tw`my-1.5 rounded-md overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`;
  return (
    <View style={tw`p-4`}>
      {/* Copy tag */}
      <Pressable
        onPress={() => props.navigation.navigate('CopyTagModal')}
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <DocumentCopy width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Copy tag</Text>
      </Pressable>

      {/* Copy to infinity */}
      <Pressable
        onPress={() =>
          props.navigation.navigate('CopyTagModal', {infinity: true})
        }
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <DocumentCopyInfinity width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Copy to infinity</Text>
      </Pressable>

      {/* Erase tag */}
      <Pressable
        onPress={() => props.navigation.navigate('EraseTagModal')}
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <Trash width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Erase tag</Text>
      </Pressable>

      {/* Lock tag */}
      <Pressable
        onPress={() => props.navigation.navigate('LockTagModal')}
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <Lock width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Lock tag</Text>
      </Pressable>

      {/* Read Memory */}
      <Pressable
        onPress={() => props.navigation.navigate('ReadMemoryModal')}
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <MemoryCard width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Read memory</Text>
      </Pressable>

      {/* Format Memory */}
      <Pressable
        onPress={() => props.navigation.navigate('FormatMemoryModal')}
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <MemoryCardTrash width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Format memory</Text>
      </Pressable>

      {/* Set password */}
      <Pressable
        onPress={() => props.navigation.navigate('SetPasswordModal')}
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <Key width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Set password</Text>
      </Pressable>

      {/* Remove password */}
      <Pressable
        onPress={() => props.navigation.navigate('RemovePasswordModal')}
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <KeyCancel width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Remove password</Text>
      </Pressable>

      {/* Advanced NFC commands */}
      <Pressable
        onPress={() => props.navigation.navigate('AdvancedCommandsModal')}
        style={itemStyle}
        android_ripple={{borderless: false}}>
        <MemoryOutline width={iconSize} height={iconSize} />
        <Text style={tw`ml-3 text-lighter`}>Advanced NFC commands</Text>
      </Pressable>
    </View>
  );
}

export default OtherPage;
