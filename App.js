/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { GoogleSignin } from '@react-native-google-signin/google-signin';
 import auth from '@react-native-firebase/auth';
 import React from 'react';
 import type {Node} from 'react';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const App: () => Node = () => {
   GoogleSignin.configure({
     webClientId: '899791321976-coa805jheu6fm984hbd5917vfl4o4ehh.apps.googleusercontent.com',
   });
 
       const signInWithGoogleAsync = async () => {
       
         // Get the users ID token
         const {idToken} = await GoogleSignin.signIn();
 
         // Create a Google credential with the token
         const googleCredential = auth.GoogleAuthProvider.credential(idToken);
       
         // Sign-in the user with the credential
         const user_sign_in = auth().signInWithCredential(googleCredential);
 
         user_sign_in.then((user) =>{
           console.log(user);
         })
         .catch((error) =>{
           console.log(error);
         })
       }
 
 
 
 
   return(
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Button
       title='SignIn with google'
       onPress={signInWithGoogleAsync}
       />
 
     </View>
   )
 }
 
 
 
 export default App;
 