import React from 'react';
import tw from '../lib/tailwind';
import {Text, View} from 'react-native';

function ModalTemplate({children, title, containerStyle}) {
  return (
    <View style={tw`flex flex-1 items-center justify-center p-6`}>
      <View
        style={[
          tw`flex-col w-64 bg-white dark:bg-secondary rounded-md p-2`,
          containerStyle,
        ]}>
        {Boolean(title) && (
          <View style={tw`border-b border-accent -mx-2 pb-1 px-4`}>
            <Text
              style={tw`text-xl font-bold text-center text-black dark:text-white`}>
              {title}
            </Text>
          </View>
        )}
        {children}
      </View>
    </View>
  );
}

export default ModalTemplate;
