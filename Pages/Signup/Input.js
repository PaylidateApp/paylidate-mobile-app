import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Input = () => {
  return (
    <View style={styles.InputGroup}>
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
        <View>
        <View style={styles.signContainer}>
            <Text style={styles.signUp}>SignUp</Text>
        </View>
        <View style={styles.nxt}>
            <Text style={styles.acc}>Already have an account?</Text>
            <Text style={styles.login}>Log in</Text>
        </View>

        <View style={styles.footer}>
            <Text style={styles.ft}>Buyers Protection| Sellers Verificaton| Transaction Security</Text>

        </View>
    </View>
    </View>
  )
}

export default Input

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

    signContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 22,
        
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
        marginTop: 40,
        
    },

    acc: {
        fontSize: 12,
        color: "#FFFFFF",
    },

    login: {
        fontSize: 12,
        color: "#FFFFFF",
    },

    footer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        
    },

    ft: {
        fontSize: 12,
        color: "#FFFFFF",
    },
})






