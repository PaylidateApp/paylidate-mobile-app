import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/theme'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Navigation = () => {

    const navigation = useNavigation()

  const dashboard = async () => 
  {
         navigation.navigate('Dashboard')
         
  }

  const settings = async () => 
  {
         navigation.navigate('Settings')
         
  }
  return (
    <View style={styles.navigationalmenu}>
      
      <TouchableOpacity onPress={dashboard} style={styles.navigationalbtn}>
      <MaterialCommunityIcons name="home" size={24} color="black" />
        <Text style={styles.navigationalmenuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navigationalbtn}>
      <MaterialCommunityIcons name="contacts" size={24} color="black" />
        <Text style={styles.navigationalmenuText}>Network</Text>
        
      </TouchableOpacity>

      <AntDesign name="plus" size={24} color="black" style={styles.navigationalbtn} />

      <TouchableOpacity style={styles.navigationalbtn}>
      <MaterialCommunityIcons name="bell" size={24} color="black" />
        <Text style={styles.navigationalmenuText}>Notifications</Text>
        
      </TouchableOpacity>

      <TouchableOpacity onPress={settings} style={styles.navigationalbtn}>
      <Octicons name="gear" size={24} color="black" />
        <Text style={styles.navigationalmenuText}>Settings</Text>
        
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    navigationalmenu:
    {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height:44,
        marginTop:8
    },
    navigationalmenuText:
    {
        fontFamily: FONTS.cabin,
        fontSize: 12,
        fontWeight:400,
        
        

    },

    navigationalbtn:
    {
        marginLeft: 30,
       alignItems: "center",
    }
    
    });
export default Navigation