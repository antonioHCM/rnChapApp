import {createAppContainer, createNavigationContainer, createSwitchNavigator} from 'react-navigation';
import {AuthStack, ChatStack} from './auth-navigator';
import {AppStack} from './app-navigator';
import SplashScreen from '../scenes/splash';
import { useContext } from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useAuth } from '../contexts/auth';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatScreen from '../scenes/chat'

export const Router = () => {

  const {loggedIn, loading} = useAuth();

  if (loading) {
    //You can see the component implementation at the repository
    return  (
    
      <SplashScreen />
    
    )
  }

  return(
    <NavigationContainer>
      {loggedIn ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
    
  )
}
