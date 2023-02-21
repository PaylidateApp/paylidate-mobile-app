import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FONTS } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PayBills = () => {

    const navigation = useNavigation()

  const navigate_airtime = async () => 
  {
         navigation.navigate('Airtime')
         
  }

  

  const navigate_internet = async () => 
  {
         navigation.navigate('Internet')
         
  }


  const navigate_databundle = async () => 
  {
         navigation.navigate('DataBundle')
         
  }
  return (
    <SafeAreaView>
      <View style={styles.screentitlewrapper}>
        <TouchableOpacity style={styles.historybtn}>
        <AntDesign name="left" size={24} color="black"  />
        </TouchableOpacity>
      
      <Text style={styles.hometext}>Home</Text>
      <Text style={styles.paybillstext}>Pay Bills</Text>

      
      </View>

      <View style={styles.searchwrapper}>
      <View style={styles.searchcontainer}>

{/* icon */}
<View style={styles.icon}>
  <FontAwesome name="search" size={24} color="#182430" />
</View>

<TextInput
  style={styles.searchinput}
  placeholder="Search" />
</View>
      </View>

      <View style={styles.paybillsrow1}>
       
       <TouchableOpacity style={styles.airtimebtn} onPress={navigate_airtime}>
        <View style={styles.phonebackground}>
        <AntDesign name="phone" size={24} color="white" />
        </View>

        <Text style={styles.airtimetext}>Airtime</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.databundlebtn} onPress={navigate_databundle}>
        <View style={styles.phonebackground}>
        <Fontisto name="world-o" size={24} color="white" />
        </View>

        <Text style={styles.airtimetext}>Data Bundle</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.tvsubbtn}>
        <View style={styles.phonebackground}>
        <MaterialCommunityIcons name="youtube-subscription" size={24} color="white" />
        </View>

        <Text style={styles.airtimetext}>TV Subscription</Text>
        <Text style={styles.comingsoontext}>Coming soon</Text>
       </TouchableOpacity>
      </View>

      <View style={styles.paybillsrow2}>
       
       <TouchableOpacity style={styles.electricitybtn}>
        <View style={styles.phonebackground}>
        <MaterialCommunityIcons name="lightning-bolt" size={24} color="white" />
        </View>

        <Text style={styles.airtimetext}>Electricity</Text>
        <Text style={styles.comingsoontext}>Coming soon</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.databundlebtn} onPress={navigate_internet}>
        <View style={styles.phonebackground}>
        <Fontisto name="world-o" size={24} color="white" />
        </View>

        <Text style={styles.airtimetext}>Internet</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.tvsubbtn}>
        <View style={styles.phonebackground}>
        <FontAwesome5 name="hand-holding-water" size={24} color="white" />
        </View>

        <Text style={styles.airtimetext}>Giving</Text>
        <Text style={styles.comingsoontext}>Coming soon</Text>
       </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default PayBills

const styles = StyleSheet.create({
    container:
    {
      backgroundColor:'#FBFFFD'
    },
    searchwrapper:{
        alignItems:'center',
        marginTop:24,
    },
    screentitlewrapper:
    {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:12
        
        
    },
    paybillsrow1:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:86
    },
    paybillsrow2:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:44
    },
  
    screentitlewrap:
    {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:12,
        borderBottomWidth:1,
        borderBottomColor:'grey',
        paddingBottom:9,
    },

    historybtn:{
      marginLeft:25
    },
    paybillstext:{
        marginLeft:75,
        fontFamily:FONTS.cabin,
        fontSize:16,
        fontWeight:'bold'
      },
      searchcontainer:{
        alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth:1,
      borderRadius:15,
      width: 240,
      height: 28,
      },
      icon:
      {
        marginLeft:10
      },
      searchinput:
      { marginRight:100,
      },
      phonebackground:
      {
        width:57,
        height:57,
        borderRadius:69.5,
        backgroundColor:'#182430',
        alignItems: 'center',
        justifyContent: 'center',
      },

      airtimebtn:{
        alignItems:'center',
        marginLeft:43
      },
      databundlebtn:{
        alignItems:'center'
      },
      tvsubbtn:
      {
        alignItems:'center',
        marginTop:10,
        marginRight: 43
      },
      electricitybtn:
      {
        alignItems:'center',
        marginTop:10,
        marginLeft: 43
      },
      airtimetext:
      {
        fontFamily:FONTS.cabin,
        fontSize:12,
        marginTop:10,
        fontWeight:'bold'
      },

      comingsoontext:
      {
        marginTop:4,
        color:'grey',
        fontSize:12,
        fontFamily:FONTS.cabin
      }
    
    });