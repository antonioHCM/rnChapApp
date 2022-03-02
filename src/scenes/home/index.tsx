// HomeScreen
import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../../contexts/auth';
import {SafeAreaView, Text, TouchableHighlight,} from 'react-native';
import ChatRoomService from "../../services/chat-room-service";
import {ListItem, Icon} from 'react-native-elements';




const HomeScreen = ({navigation}) => {

  const auth = useAuth();

  const goToChat = (id) => {

    navigation.navigate('Chat',{
      roomId: id
    })
  }

  const [rooms,setRooms] = useState([]);
  useEffect( ()=> {
  
      ChatRoomService.loadRooms().then((items)=>{
       setRooms(items);
      })
  }
  )
return( 
  <SafeAreaView>
    {
      rooms.map((item,i) => {

        return(
          <ListItem key={i} bottomDivider onPress={()=>{
            goToChat(i);
            }}>
            
            <ListItem.Content>
              <ListItem.Title>
                {item.Name} 
                </ListItem.Title>
                <ListItem.Subtitle>
                {item.Desc}
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
          </ListItem>
          
        )
      }
      
      )
    }

      <TouchableHighlight onPress={() => auth.signOut()}>
      <Text>Log out</Text>
    </TouchableHighlight>
  </SafeAreaView>
)
}




export default HomeScreen;