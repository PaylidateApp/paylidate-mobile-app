import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function ChatHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profile}>
        <Image style={styles.image} source={require('../../assets/M.Lawrence.png')} />
        <View style={styles.txt}>
            <Text style={styles.name}>Lawrence Attah</Text>
            <Text style={styles.username}>@attahlaw</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ticon}>
        <FontAwesome style={styles.icon} name="money" size={22} color="#000ff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#EB6117',
        paddingTop: 40
    },

    profile: {
      flexDirection: 'row',

    },
    
    image: {
      margin: 5,
    },

    txt: {
      marginTop: 17,
      fontSize: 10,
      color: '#FFFFFF',
    },

    name: {
      fontSize: 14,
      fontweight: 500,
      color: '#FFFFFF',
      lineHeight: 14,
    },

    username: {
      fontSize: 14,
      fontweight: 500,
      color: '#FFFFFF',
    },

    ticon: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'flex-end',
      alignItems: 'center',
      color: '#ffffff',
      margin: 10,
    },

    icon: {
      backgroundColor: '#D9D9D9',
      padding: 6,
      borderRadius: 5,
      margin: 15,
    }
})