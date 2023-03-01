import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { FONTS } from '../../constants/theme'

const VerifyAccount = () => {
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
        <TextInput style={styles.verificationcodeinput} />
        <TextInput style={styles.verificationcodeinput} />
        <TextInput style={styles.verificationcodeinput} />
        <TextInput style={styles.verificationcodeinput} />
        </View>


     <TouchableOpacity style={styles.verifybtn}>
        <Text style={styles.verifytext}>Verify</Text>
        
     </TouchableOpacity>
        </KeyboardAvoidingView>
        

      
    </SafeAreaView>
  )
}

export default VerifyAccount

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:'#EB6117',
        alignItems: 'center',
        height: '100%',

    },

    content:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20
    },
    verificationcodeinput:
    {
        width:34,
        height:42,
        marginTop:285,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        backgroundColor:'white'

    },

    verifybtn:
    {
        width:163,
        height:37,
        marginTop:134,
        borderRadius:25,
        backgroundColor:'#182430',
        alignItems:'center',
        justifyContent:'center',
    },

    verifytext:
    {
        color:'white',
        fontFamily:FONTS.cabin,
        fontSize:14
    }

})
