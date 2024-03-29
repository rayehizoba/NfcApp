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

const DATA = [
  {
    id: 1,
    title: 'Copy tag',
    icon: <DocumentCopy width={iconSize} height={iconSize} />,
  },
  {
    id: 2,
    title: 'Copy to infinity',
    icon: <DocumentCopyInfinity width={iconSize} height={iconSize} />,
  },
  {
    id: 3,
    title: 'Erase tag',
    icon: <Trash width={iconSize} height={iconSize} />,
  },
  {
    id: 4,
    title: 'Lock tag',
    icon: <Lock width={iconSize} height={iconSize} />,
  },
  {
    id: 5,
    title: 'Read memory',
    icon: <MemoryCard width={iconSize} height={iconSize} />,
  },
  {
    id: 6,
    title: 'Format memory',
    icon: <MemoryCardTrash width={iconSize} height={iconSize} />,
  },
  {
    id: 7,
    title: 'Set password',
    icon: <Key width={iconSize} height={iconSize} />,
  },
  {
    id: 8,
    title: 'Remove password',
    icon: <KeyCancel width={iconSize} height={iconSize} />,
  },
  {
    id: 9,
    title: 'Advanced NFC commands',
    icon: <MemoryOutline width={iconSize} height={iconSize} />,
  },
];

function OtherPage(props) {
  return (
    <View style={tw`p-5`}>
      {DATA.map(each => (
        <Pressable
          style={tw`my-1.5 rounded overflow-hidden flex-row items-center p-3 border border-primary dark:border-green bg-green/100 dark:bg-green/50`}
          android_ripple={{borderless: false}}>
          {each.icon}
          <Text style={tw`ml-3 text-lighter`}>{each.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export default OtherPage;
