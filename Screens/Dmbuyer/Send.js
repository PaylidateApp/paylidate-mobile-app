import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState, useRef} from 'react'
import MessageList from './MessageList'
import Card from './Card'


export default function Send() {
    const [messages, setMessages] = useState([
        {
            user: 0,
            time: '12:00',
            content: 'Hey'
        },

        {
            user: 1,
            time: '12:01',
            content: 'Hi'
        },

        {
            user: 1,
            time: '12:03',
            content: 'How are you'
        },

        {
            user: 0,
            time: '12:04',
            content: 'I am doing great'
        },
    ]);
    //  const currentUser = 0;
    const user = useRef (0);
    const scrollView = useRef ();

  return (
    <ScrollView
    ref={ref => ScrollView.current = ref}
    onContentChange= {() => {
        ScrollView.current.scrollToEnd({ animated: true})
    }}
    >
        {messages.map((message, index) =>(
            <MessageList 
            key={index}
            time={message.time} 
            isLeft={message.user !== currentUser} 
            message={message.center} 
            />
        ))}
    </ScrollView>
    // <View style={styles.container}>
    //     <View style={styles.messageContainer}>
    //         <View style={styles.messageView}>
    //             <Text style={styles.username}>@Lilian444</Text>
    //             <Text style={styles.time}>12:24pm</Text>
    //         </View>
    //         <View style={styles.seeMessage}>
    //         <Text style={styles.message}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
    //         </View>
    //     </View>
    // </View>
  )
}

const styles = StyleSheet.create({
    // container:{
        
    // },

    // messageContainer:{

    //     alignSelf: 'flex-end',
    //     padding: 10,
    //     // borderRadius: 35,
    //     paddingHorizontal: 10,
    // },

    // messageView: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     backgroundColor: '#D9D9D9',
    //     padding: 3,
    //     borderTopEndRadius: 10,
    //     borderTopStartRadius: 10,


    // },

    // username: {
    //     fontSize: 10,
    // },

    // time: {
    //     fontSize: 10,
    // },

    // message: {
    //     fontSize: 10,
    // },


    // seeMessage:{
    //     backgroundColor: '#FFFFFF',
    //     padding: 5,
    //     borderBottomEndRadius: 10,
    //     borderBottomStartRadius: 10,
    // },
})