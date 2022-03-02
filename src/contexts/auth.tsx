import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '../services/auth-service';
import { firebase, FirebaseAuthTypes,}  from '@react-native-firebase/auth';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';


type AuthContextData = {
  loading: boolean;
  userInfo?: FirebaseAuthTypes.User;
  signIn(): Promise<void>;
  signOut(): void;
  finishLoading():void;
  loggedIn: boolean;
};

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({children}) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState<FirebaseAuthTypes.User>();

  function onAuthStateChanged(user){
    if(user){
      setloggedIn(true)
    }
    else{
      setloggedIn(false)
    }
    setuserInfo(user);
  }

  useEffect(() => {
    
    GoogleSignin.configure({
      webClientId: '899791321976-coa805jheu6fm984hbd5917vfl4o4ehh.apps.googleusercontent.com',
    });
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    
    // firebase.auth().onAuthStateChanged((userData) =>{
    //   if(userData){
    //     setUser(userData);
    //   }
    // })
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
  }, []);
  function finishLoading(){

    setLoading(false);
  }

  const signIn = async () => {
     const _authData = await authService.signIn();
     setloggedIn(true)
     setuserInfo(_authData.user)
    //Set the data in the context, so the App can be notified
    //and send the user to the AuthStack

  };

  const signOut = async () => {
    await authService.signOut();
    setloggedIn(false);
    setuserInfo([]);
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{loading, userInfo, signIn, signOut, finishLoading, loggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthContext, AuthProvider, useAuth};