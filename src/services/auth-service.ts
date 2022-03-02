import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';




  const signIn = async ():Promise<FirebaseAuthTypes.UserCredential |any> => {
    try {
       const {idToken} = await GoogleSignin.signIn();
           const googleCredential = auth.GoogleAuthProvider.credential(idToken);
       return (auth().signInWithCredential(googleCredential))
      
      } catch (error) {
       switch (error.code) {
         default:
           return {
            error: "Check your internet connection."
           };
       }
      }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };
  
  
  export const authService = {
    signIn,
    signOut,
  };
  //   try {
//     const {idToken} = await GoogleSignin.signIn();
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// return (auth().signInWithCredential(googleCredential))

// } catch (error) {
// switch (error.code) {
//   default:
//     return {
//       error: "Check your internet connection."
//     };
// }