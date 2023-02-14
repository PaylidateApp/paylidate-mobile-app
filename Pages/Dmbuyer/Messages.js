import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import ChatHeader from './ChatHeader'
import Card from './Card'
import Send from './Send'
import Card2 from './Card2'
import ChatInput from './ChatInput'
import ChatScreen from './ChatScreen'


export default function Messages() {
  return (
    <View>
      {/* <ChatHeader/> */}
      {/* <Card /> */}
      {/* <Send /> */}
      {/* <Card2 /> */}
      {/* <ChatInput/> */}
      <ChatScreen />

    </View>
  )
}

const styles = StyleSheet.create({
  backgroundColor: '#182430',
})