// AuthNavigator
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ChatScreen from '../scenes/chat';
import LoginScreen from '../scenes/login';

const Stack = createStackNavigator(); 

export const AuthStack = () => {

  return(

    <Stack.Navigator>
      <Stack.Screen name='LogIn' component={LoginScreen}/>
      
        
    </Stack.Navigator>

  )
}
