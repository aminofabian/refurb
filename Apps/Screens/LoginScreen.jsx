import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);



  return (

    <View className='container'>
      <Image source={require('./../../assets/images/buy.jpg')}
        className='w-full h-[300px] object-cover rounded-t-[2xl] rounded-lg'
      />

      <View className='p-8 mt-[-30px] rounded-t-3xl bg-teal-50'>
      <Text className='font-bold text-3xl m-auto'>Refurbs Marketplace</Text>
      <Text className='mx-auto text-lg font-thin text-slate-500' onPress={() => console.log('Sign In')}>Buy and Sell Refurbished Goods</Text>
      <TouchableOpacity
        onPress={onPress}
        className='mx-5 p-3 bg-teal-400 rounded-full mt-20'>
        <Text className='text-white text-center text-lg font-bold'>Get Started</Text>
      </TouchableOpacity>
    </View>
    </View >



  )
}


