import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View>
        <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
    container:{
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