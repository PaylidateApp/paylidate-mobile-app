import { View, SafeAreaView, Text, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/theme'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      <View style={styles.screentitlewrapper}>
      <AntDesign name="left" size={24} color="black" />
      <Text>Home</Text>
      <Text>Settings</Text>

      
      </View>

      <View style={styles.screentitlewrapper}>
      <Text style={styles.acctsettingstext}>Account Settings</Text>

<TouchableOpacity style={styles.verifybtn}>
<Text style={styles.verifymetext}>Verify me</Text>
</TouchableOpacity>
      </View>

      
     
      
      
      
      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screentitlewrapper:
  {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
  },
acctsettingstext:{
  fontFamily:FONTS.cabin,
  fontSize: 14,
  fontWeight:500

},
  verifybtn:
  {
    backgroundColor: '#319ED9',
    borderRadius: 10,
    width: 81,
    height:10,
    marginBottom:22,
  },

  verifymetext:
  {
    color:'#FFFFFF',
    fontFamily:FONTS.cabin,
    fontSize:14,
    fontWeight:500
  }
  });
export default Settings