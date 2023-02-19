import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React,  {useState, useRef} from 'react'
import Message from './Message'

const MessageList = () => {
    const [messages, setMessages] = useState([
        {
            user: 0,
            username: '@lilian444',
            time: '12:00',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },

        // {
        //     user: 1,
        //     username: '@lilian444',
        //     time: '12:01',
        //     content: 'Hi'
        // },

        // {
        //     user: 0,
        //     username: '@lilian444',
        //     time: '12:03',
        //     content: 'How are you'
        // },

        // {
        //     user: 1,
        //     username: '@lilian444',
        //     time: '12:04',
        //     content: 'I am doing great'
        // },

        // {
        //     user: 1,
        //     username: '@lilian444',
        //     time: '12:04',
        //     content: 'I am doing great'
        // },
    ]);
     const currentUser = 0;
    const user = useRef (0);
    const scrollView = useRef ();

  return (
    <View
    ref={ref => ScrollView.current = ref}
    onContentChange= {() => {
        ScrollView.current.scrollToEnd({ animated: true})
    }}
    >
        {messages.map((message, index) =>(
            <Message 
            key={index}
            username={message.username} 
            time={message.time} 
            isLeft={message.user !== user.current} 
            message={message.content} 
            />
        ))}
    </View>
  )
}

export default MessageList

const styles = StyleSheet.create({})