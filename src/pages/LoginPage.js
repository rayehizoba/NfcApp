import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from '../lib/tailwind';
import {Label} from '../components/Label';

function LoginPage(props) {
  return (
    <ScrollView contentContainerStyle={tw`p-8`}>
      <View style={tw`h-60 flex items-center justify-center`}>
        <Image
          style={tw`h-16`}
          source={require('../assets/img/brand-logo.png')}
          resizeMode="contain"
        />
      </View>

      <View style={tw`flex-1 flex-col justify-center max-w-sm w-full mx-auto`}>
        <Label title="Email">
          <TextInput
            style={tw`input`}
            placeholder="abdc123@xyz.com"
            placeholderTextColor={tw.color('placeholder/50')}
          />
        </Label>

        <Label title="Password" style={tw`mt-5`}>
          <TextInput
            style={tw`input`}
            placeholder={Array(10).fill('•').join(' ')}
            placeholderTextColor={tw.color('placeholder/50')}
            secureTextEntry
            autoCapitalize="none"
          />
        </Label>

        <TouchableOpacity hitSlop={20} style={tw`ml-auto mt-1`}>
          <Text style={tw`dark:text-lighter text-dark text-xs`}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => props.navigation.navigate('FooPage')}
          style={tw`btn mt-8`}
          android_ripple={{borderless: false}}>
          <Text style={tw`text-white uppercase font-semibold`}>Login</Text>
        </Pressable>

        <TouchableOpacity
          onPress={() => props.navigation.replace('SignUpPage')}
          hitSlop={20}
          style={tw`mx-auto mt-4`}>
          <Text style={tw`dark:text-lighter text-dark text-xs`}>
            Don't have an account?{' '}
            <Text style={tw`uppercase text-primary font-semibold`}>
              Sign-Up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default LoginPage;
