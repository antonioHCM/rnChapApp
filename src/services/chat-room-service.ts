import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';


class ChatRoomService {
    
    

    ref= (): FirebaseDatabaseTypes.Reference => {
        
        return firebase.database().ref('ChatRooms');

    }


    loadRooms = async () => {
            
        const snapshot= await this.ref().once('value');
        let data = snapshot.val();
        const rooms = Object.values(data);
        return (rooms);
  };
        

    

    }
    


const instance = new ChatRoomService()

export default instance;