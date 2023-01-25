
import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'

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
  

 email:
  {
    width: 260,
    height: 37,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#D9D9D9',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',   
    
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
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)'
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
    boxShadow: 9,
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
