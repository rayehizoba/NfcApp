import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import tw from '../lib/tailwind';

function SignInPage(props) {
  return (
    <View style={tw`p-8 flex-col flex-1`}>
      <View style={tw`h-60 flex items-center justify-center`}>
        <Image
          style={tw`h-16`}
          source={require('../assets/img/brand-logo.png')}
          resizeMode="contain"
        />
      </View>

      <View style={tw`flex-1 flex-col justify-center max-w-sm w-full mx-auto`}>
        <Pressable
          onPress={() => props.navigation.navigate('LoginPage')}
          style={tw`btn`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-lighter uppercase font-semibold`}>Login</Text>
        </Pressable>

        <Pressable
          onPress={() => props.navigation.navigate('SignUpPage')}
          style={tw`btn-outline mt-5`}
          android_ripple={{borderless: false}}>
          <Text
            style={tw`text-primary dark:text-lighter uppercase font-semibold`}>
            Sign-Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignInPage;
