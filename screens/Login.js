
import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/theme'

  

const Login = () => {

  
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/splash_logo.png')}
      />


    <View style={styles.inputgroup}>

    <TextInput
        style={styles.email}
        placeholder="Enter Your Email"
        
        
      />

<TextInput
        style={styles.password}
        placeholder="Enter Your Password"
       
        
      />
    </View>


<View style={styles.btncontainer}>
<TouchableHighlight style={styles.loginbtn}>
<Text style={styles.loginbtnlabel}>Login</Text>
</TouchableHighlight>
      
</View>
    


    

    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 16
  },

  container: {
   

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
    // fontFamily: ,
    
  },
  inputgroup:
  {
      marginTop: -60,
      alignItems: 'center',
  }, 

  password:
  {
    width: 260,
    marginTop: 24,
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
    textAlign: 'center'
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
    fontFamily: FONTS.cabin
  }

});

export default Login
