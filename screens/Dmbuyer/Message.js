import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = ({username, isLeft, message, time}) => {
    const isOnLeft = type => {
        if(isLeft && type === 'container'){
            return {
                alignSelf: 'flex-start',
                backgroundColor: '#f0f0f0',
                borderTopLeftRadius:0
            };
        } else if (isLeft && type === "message"){
            return {
                color:'#000',
            };
        } else if (isLeft && type === "username") {
            return {
                color: 'darkgray',
            };

        } else if (isLeft && type === "time") {
            return {
                color: 'darkgray',
            };
        } else  {
            return {
                borderTopRightRadius: 0
            };
        }
    }
  return (
    <View style = {styles.container}>
    <View style = {[styles.messageContainer, isOnLeft('messageContainer')]}>
        <View style = {styles.messageView}>
            <Text style = {[styles.username, isOnLeft('username')]}> {username} </Text>
            <Text style = {[styles.time, isOnLeft('time')]}> {time} </Text>
        </View>
        <View style = {styles.timeView}>
            <Text style = {[styles.message, isOnLeft('message')]}> {message} </Text>
        </View>
    </View>
</View>
  )
}

export default Message

const styles = StyleSheet.create({
    container: {
        paddingVertical:10,
        marginVertical: 5
    },
    messageContainer: {
        // backgroundColor: "#FFFFFF",
        maxWidth: '80%',
        alignSelf: 'flex-end',
        borderRadius: 35,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
    },
    messageView: {
        backgroundColor:'transparent',
        // maxWidth: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9',
        padding: 3,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,

    },

    timeView: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        // backgroundColor:'transparent',
        // justifyContent: 'flex-end',
        // paddingLeft:10
    },


    time: {
        color: 'Light',
        alignSelf: 'flex-start',
        fontSize: 10,
    },

    username: {
        color: 'Light',
        alignSelf: 'flex-start',
        fontSize: 10,
    },

    message: {
        color: 'Light',
        alignSelf: 'flex-start',
        fontSize: 11.5,
    },
})