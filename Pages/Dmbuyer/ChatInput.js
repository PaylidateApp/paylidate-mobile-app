import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function ChatInput() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.secContainer}>
        <View style={styles.innerContainer} >
          <TextInput placeholder='Type message here...'></TextInput>
          <TouchableOpacity style={styles.msgconButton}>
            <FontAwesome style={styles.icon} name="envelope-o" size={25} color="#000ff" />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    backgroundColor:'#182430',
  },

  secContainer: {
    justifyContent: 'center',
    backgroundColor:'#FFFFFF',
    // marginTop: 90,
  },

  innerContainer: {
    flexDirection: 'row',
    justifyContent:  'space-between',
    padding: 12,

  },
})