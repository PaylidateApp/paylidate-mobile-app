

import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight, Pressable, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { FONTS } from '../../constants/theme'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation()

  const checklogin = async () => 
  {
         navigation.navigate('DashboardScreen')
         
  }

  const signup_navigation = async () => 
  {
         navigation.navigate('SignUp')
         
  }

  const reset_password_navigation = async () => 
  {
         navigation.navigate('ResetInput')
         
  }

  return (
    <SafeAreaView style={styles.container}>

      
      <Image
      style={styles.logo}
      source={require('../../assets/splash_logo.png')} />


<KeyboardAvoidingView>
   {/* Email */}
   <View style={styles.emailcontainer}>

{/* icon */}
<View style={styles.icon}>
  <FontAwesome name="user" size={24} color="#182430" style={styles.inputboxicon} />
</View>

<TextInput
  style={styles.email}
  placeholder="Enter Your Email" 
  placeholderTextColor={'#848484'}/>
</View>

{/* Password */}
<View style={styles.passowrdcontainer}>

{/* icon */}
<View style={styles.icon}>
  <FontAwesome name="lock" size={24} color="#182430" style={styles.inputboxicon} />
</View>

<TextInput
  style={styles.password}
  placeholder="Enter Your Password"
  placeholderTextColor={'#848484'}/>

</View>


<View style={styles.btncontainer}>
<TouchableHighlight style={styles.loginbtn} onPress={checklogin}>
  <Text style={styles.loginbtnlabel}>Login</Text>
</TouchableHighlight>

</View>


<View style={styles.pressable}>

<Pressable onPress={signup_navigation}>
<Text style={styles.signuptext}>Don’t have an account? Sign Up</Text>
</Pressable>

<Pressable onPress={reset_password_navigation}>
<Text style={styles.forgotpasswordtext}>Forgot Password?</Text>
</Pressable>



</View>


<View style={styles.footertextcontainer}>

<Text style={styles.footertext}>Buyer Protection | Seller Verification | Transaction Security</Text>

</View>
</KeyboardAvoidingView>
 
      
    



  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 100,
    width: 165,
    height: 183
  },

  container: {
    flex: 1,
    backgroundColor: '#EB6117',
    alignItems: 'center',
    

  },

  footertext:
  {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight:'bold',
    fontFamily: FONTS.cabin,
    marginLeft:67,
    marginRight:66
  },
  signuptext:{
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight:'bold',
    marginLeft: 40,
    fontFamily: FONTS.cabin
  },

  forgotpasswordtext:{
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight:'medium',
    marginLeft: 47,
    marginRight:39,
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
    fontFamily: FONTS.cabin,
    fontSize:16,
    fontWeight: 'bold',
    paddingLeft: 19,


    
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
    marginTop:50
  },


  inputboxicon:{
    marginTop:5,
  },
  emailcontainer:
  {
      marginTop: -20,
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
    fontFamily: FONTS.cabin,
    fontSize:16,
    fontWeight: 'bold',
    paddingLeft: 19,

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
    fontSize:16,
    fontWeight: 'bold',

  }

});
export default Login