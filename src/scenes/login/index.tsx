// LoginScreen
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {SocialButton} from '../../components/atoms';
import React, {useContext, useState, useEffect} from 'react';
import {useAuth} from '../../contexts/auth';





const LoginScreen = ({navigation}) => {

  const auth = useAuth();

  return(
  <SafeAreaView>
    <Text>Screen: log in</Text>
    <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => auth.signIn()}
            
          />
  </SafeAreaView>
);
}

export default LoginScreen;
