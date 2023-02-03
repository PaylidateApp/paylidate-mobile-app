import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome'


export default function ResetInput() {
  return (
    <KeyboardAvoidingView style={styles.InputGroup}>
        <View style={styles.container}>
        <View style={styles.InputContainer}>
            <FontAwesome style={styles.icon} name="envelope" size={17} color="#000ff" />
            <TextInput style={styles.Input} placeholder="Enter You Email"/>
        </View>
        </View>

        <View>
        <View style={styles.container}>
            <Text style={styles.signUp}>Reset Password</Text>
        </View>
        <View style={styles.nxt}>
            <Text style={styles.acc}>Don't have an account?</Text>
            <Text style={styles.login}>SignUp</Text>
            <Text style={styles.acc}>     Back to Login</Text>
        </View>

        <View style={styles.footer}>
            <Text style={styles.ft}>Buyers Protection| Sellers Verificaton| Transaction Security</Text>

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
        padding: 7,
        backgroundColor: "#D9D9D9",
        width: 250,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    container: {
        
    },

    container:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 32,
        
    },

    signUp: {
        fontSize: 14,
        backgroundColor:"#182430",
        color: "#FFFFFF",
        paddingVertical: 12,
        paddingHorizontal: 70,
        borderRadius: 20,
    },

    nxt:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
        
    },

    acc: {
        fontSize: 10,
        color: "#FFFFFF",
    },

    login: {
        fontSize: 10,
        color: "#FFFFFF",
    },

    footer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        
    },

    ft: {
        fontSize: 12,
        color: "#FFFFFF",
    },

    
})