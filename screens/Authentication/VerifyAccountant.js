import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/theme'

const VerifyAccountant = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
        <TextInput style={styles.verificationcodeinput} />
        <TextInput style={styles.verificationcodeinput} />
        <TextInput style={styles.verificationcodeinput} />
        <TextInput style={styles.verificationcodeinput} />
        </View>


     <TouchableOpacity style={styles.verifybtn}>
        <Text style={styles.verifytext}>Verify</Text>
        
     </TouchableOpacity>

      
    </SafeAreaView>
  )
}

export default VerifyAccountant

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:'#EB6117',
        alignItems: 'center',
    },

    content:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    verificationcodeinput:
    {
        width:34,
        height:42
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
