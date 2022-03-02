// ChatScreen
import React, {useEffect, useRef, useState} from "react";
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import ChatService from "../../services/chat-service";
import {GiftedChat, IMessage, User} from "react-native-gifted-chat";
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';




const ChatScreen = ({route}) => {

      const auth = useAuth();

      const [messages, setMessages] = useState<IMessage[]>([])
      const prevMessages = useRef<IMessage[]>([]);
      const user = {
            name: auth.userInfo?.displayName,
            avatar: auth.userInfo?.photoURL,
          _id: ChatService.uid(),
      } as User;
      useEffect(() => {
            ChatService.updateChatRoomId(route.params.roomId)
         ChatService.on(messages => {
              const newMessages = GiftedChat.append(prevMessages.current, messages)
              prevMessages.current = newMessages
              setMessages(newMessages)
          })
          return function cleanup() {
            ChatService.off();
          }
      }, [])
      return <SafeAreaView style={{flex: 1}}>
          <GiftedChat
              messages={messages}
              onSend={ChatService.send}
              user={user}
          />
      </SafeAreaView>
  }
 


  
export default ChatScreen;