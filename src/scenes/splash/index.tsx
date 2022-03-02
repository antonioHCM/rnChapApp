// SplashScreen
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/auth';

const SplashScreen = () => {

  const auth = useAuth();

  useEffect(() => {
    setTimeout(() => {
      auth.finishLoading();
    }, 5000);
  }, []);

  return (
  <SafeAreaView>
    <View >
      <Image style={styles.logo} source={require('../../assets/images/splashhoc.png')}/>
    </View>
  </SafeAreaView>  
  );
};

const styles = StyleSheet.create({
 
  logo: {
    width: '100%',
    height: '100%',
  
  },
});






export default SplashScreen;
