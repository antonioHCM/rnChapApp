import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';


class ChatService {
    
    chatRoom = 'ChatRooms/'

    getCurrentUser = () => {
        return(
            firebase.auth().currentUser        
            )
    }
    updateChatRoomId = (id) => {
        this.chatRoom = `ChatRooms/${id}/Messages`
    }

     uid = () => {
        return (auth().currentUser || {}).uid;
    }

    ref= (): FirebaseDatabaseTypes.Reference => {
        return firebase.database().ref(this.chatRoom);
    }

    timestamp= () => {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    parse = (snapshot: any) => {
        const {timestamp: numberStamp, text, user} = snapshot.val();
        const {key: _id} = snapshot;
        const timestamp = new Date(numberStamp);
        return {
            _id,
            timestamp,
            text,
            user,
        };
    };

    on = (callback: (messages: any) => void) =>
        this.ref()
            .limitToLast(50)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    send = (messages: any[]) => {
        for (let i = 0; i < messages.length; i++) {
            const {text, user} = messages[i];
            const message = {
                text,
                user,
                timestamp: this.timestamp(),
            };
            this.append(message);
        }
    };

    append = (message: any) => this.ref().push(message);

    off() {
        this.ref().off();
    }
}

const instance = new ChatService()

export default instance;