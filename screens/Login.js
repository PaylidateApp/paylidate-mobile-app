

import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/theme'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation()

  const checklogin = async () => 
  {
         navigation.navigate('DashboardScreen')
         
  }

  return (
    <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../assets/splash_logo.png')} />



    {/* Email */}
    <View style={styles.emailcontainer}>

      {/* icon */}
      <View style={styles.icon}>
        <FontAwesome name="user" size={24} color="#182430" style={styles.inputboxicon} />
      </View>

      <TextInput
        style={styles.email}
        placeholder="Enter Your Email" />
      </View>

    {/* Password */}
    <View style={styles.passowrdcontainer}>

      {/* icon */}
      <View style={styles.icon}>
        <FontAwesome name="lock" size={24} color="#182430" style={styles.inputboxicon} />
      </View>

      <TextInput
        style={styles.password}
        placeholder="Enter Your Password" />

    </View>


    <View style={styles.btncontainer}>
      <TouchableHighlight style={styles.loginbtn} onPress={checklogin}>
        <Text style={styles.loginbtnlabel}>Login</Text>
      </TouchableHighlight>

    </View>


<View style={styles.pressable}>

<Pressable>
<Text style={styles.signuptext}>Don’t have an account? Sign Up</Text>
</Pressable>

<Pressable>
<Text style={styles.forgotpasswordtext}>Forgot Password?</Text>
</Pressable>
   
      
  
</View>


<View style={styles.footertextcontainer}>

<Text style={styles.footertext}>Buyer Protection | Seller Verification | Transaction Security</Text>

</View>



  </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 16
  },

  container: {
    flex: 1,
    backgroundColor: '#EB6117',
    alignItems: 'center',
    

  },

  footertext:
  {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: FONTS.cabin
  },
  signuptext:{
    color: '#FFFFFF',
    fontSize: 10,
    marginLeft: 40,
    fontFamily: FONTS.cabin
  },

  forgotpasswordtext:{
    color: '#FFFFFF',
    fontSize: 10,
    marginRight: 39,
    fontFamily: FONTS.cabin
  },
  
  icon: 
{
   backgroundColor:'#c5c5c4',
   width: 40,
   height: 37,
   alignItems: 'center',
   borderTopLeftRadius: 20,
   borderBottomLeftRadius: 20,
   shadowColor: 'black',
   shadowOffset: { width: 3, height: 1 },
   shadowOpacity: 0.5,
   shadowRadius: 8,  
   elevation: 4,

},
 email:
  {
    width: 260,
    height: 37,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#D9D9D9',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 8,  
    elevation: 4,
    textAlign: 'center',
    fontFamily: FONTS.cabin
    
  },

  pressable:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
  },

  footertextcontainer:
  {
    justifyContent: 'center',
    alignItems:'center',
    marginTop:70
  },


  inputboxicon:{
    marginTop:5,
  },
  emailcontainer:
  {
      marginTop: -60,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      
  }, 

  passowrdcontainer:
  {
      marginTop: 40,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
  },


  password:
  {
    width: 260,
    marginTop: 0,
    height: 37,
    width: 260,
    height: 37,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#D9D9D9',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 8,  
    elevation: 4,
    textAlign: 'center',
    fontFamily: FONTS.cabin
  },

  btncontainer:
  {
    alignItems: 'center',
    marginTop: 46,
  },
  loginbtn:
  {
    width: 163,
    height: 37,
    backgroundColor:'#182430',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 8,  
    elevation: 4,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginbtnlabel:
  {
    color: '#fff',
  }

});
export default Login