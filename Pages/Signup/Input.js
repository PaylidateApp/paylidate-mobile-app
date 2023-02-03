import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome'


export default function Input() {
  return (
    <KeyboardAvoidingView style={styles.InputGroup}>
        <View style={styles.container}>
        <View style={styles.InputContainer}>
        <FontAwesome style={styles.icon} name="id-card-o" size={16} color="#000ff" />
        <TextInput style={styles.Input} placeholder="Your Full Name"/>
        </View>
        </View>
        
        <View style={styles.container}>
        <View style={styles.InputContainer}>
            <FontAwesome style={styles.icon} name="phone" size={22} color="#000ff" />
            <TextInput style={styles.Input} placeholder=" Enter Your Phone Number"/>
        </View>


        </View>
        <View style={styles.container}>
        <View style={styles.InputContainer}>
            <FontAwesome style={styles.icon} name="envelope" size={17} color="#000ff" />
            <TextInput style={styles.Input} placeholder="Enter You Email"/>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.InputContainer}>
            <FontAwesome style={styles.icon} name="lock" size={25} color="#000ff" />
            <TextInput style={styles.Input} placeholder="Create Your Password"/>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.InputContainer}>
            <FontAwesome style={styles.icon} name="lock" size={25} color="#000ff" />
            <TextInput style={styles.Input} placeholder="Confirm Your Passsword" secureTextEntry/>
        </View>
        </View>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
    InputGroup: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#D9D9D9",
        
        

    },

    InputContainer: {
        flexDirection: "row",
        borderRadius:12,
        padding: 7,
        
        
        
        
    },
    
    icon: {
        padding: 9,
        backgroundColor: "#C5C5C5",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        
    },

    Input: {
        padding: 5,
        backgroundColor: "#D9D9D9",
        width: 250,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    container: {
        
    },
    
})