// AppNavigator
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../scenes/home';
import AboutScreen from '../scenes/about';
import ChatScreen from '../scenes/chat';

const Stack = createStackNavigator(); 

export const AppStack = () => {

  return(

    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='About' component={AboutScreen}/>
      <Stack.Screen name='Chat' component={ChatScreen}/> 
    </Stack.Navigator>

  )
}