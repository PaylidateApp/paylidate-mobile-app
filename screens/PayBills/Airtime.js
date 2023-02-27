import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FONTS } from '../../constants/theme'
import DropDownPicker from 'react-native-dropdown-picker';

const Airtime = () => {

    const [networkOpen, setNetworkOpen] = useState(false);
  const [networkValue, setNetworkValue] = useState(null);
  const [network, setNetwork] = useState([
    {label: 'MTN', value: 'mtn'},
    {label: 'Airtel', value: 'airtel'}
  ]);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screentitlewrapper}>
        <TouchableOpacity style={styles.historybtn}>
        <AntDesign name="left" size={24} color="black"  />
        </TouchableOpacity>
      
      <Text style={styles.hometext}>Home</Text>
      <Text style={styles.paybillstext}>Buy Airtime</Text>

      
      </View>

      <View style={styles.content}>
    <Text style={styles.networktext}>Amount</Text>
    <TextInput style={styles.phoneinput}/>

    <Text style={styles.bundletext} >Network</Text>
    <DropDownPicker
     open={networkOpen}
     value={networkValue}
     items={network}
     style={styles.dropDownPicker}
     setOpen={setNetworkOpen}
     setValue={setNetworkValue}
     setItems={setNetwork}
   />

    <View style={styles.phonenumberlabel}>
    <Text style={styles.phonenumbertext} >Phone Number</Text>
    <TouchableOpacity>
    <Text style={styles.contacttext}>Contacts</Text>
    </TouchableOpacity>
    </View>

    <TextInput style={styles.phoneinput}/>

    <TouchableOpacity style={styles.buybtn}>
      <Text style={styles.buytext}>Buy</Text>
      
    </TouchableOpacity>
    
    </View>
    </SafeAreaView>
  )
}

export default Airtime
const styles = StyleSheet.create({
    container:
    {
      backgroundColor:'#FBFFFD'
    },

    screentitlewrapper:
    {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:12
        
        
    },
    historybtn:{
      marginLeft:25
    },
    paybillstext:{
        marginLeft:75,
        fontFamily:FONTS.cabin,
        fontSize:18,
        fontWeight:'bold'
      },

      content:
    {
      width:360,
      height:394,
      borderRadius:10,
      backgroundColor:'#FFF8F4',
      shadowColor: 'black',
      shadowOffset: { width: 3, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 8,  
      elevation: 4,
      alignItems:'center',
      marginLeft:8,
      marginTop:26

    },
    dropDownPicker:
    {
      width:268,
      height:40,
      marginLeft:46,
      marginTop:6,
      paddingLeft:80,
      fontSize:16,
      fontWeight:'bold',
      fontFamily:FONTS.cabin,
      
    },
    networktext:
    {
      marginRight:209,
      marginTop:49,
      fontFamily:FONTS.cabin,
      fontSize:10,
      fontWeight:'bold'


    },

    bundletext:
    {
      marginRight:209,
      marginTop:24,
      fontFamily:FONTS.cabin,
      fontSize:10,
      fontWeight:'bold'
    },

    phonenumberlabel:
    {
      flexDirection:'row',
      justifyContent: 'space-between',
      marginTop:26,

    },
    phonenumbertext:
    {
      marginRight:130,
      fontFamily:FONTS.cabin,
      fontSize:10,
      fontWeight:'bold',

    },
    contacttext:
    {
      fontFamily:FONTS.cabin,
      fontSize:12,
      fontWeight:'bold',
    },
    phoneinput:
    {
      borderWidth:1,
      width:268,
      height:40,
      borderRadius:8,
      marginTop:6,
      paddingLeft:20,
      fontFamily:FONTS.cabin,
      fontSize:16,
      fontWeight:'bold'

    },
    buybtn:
    {
      marginTop:48,
      width:213,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#182430',
      borderRadius:5
    },

    buytext:
    {
      color:'white',
      fontFamily:FONTS.cabin,
      fontSize:16,
      fontWeight:'bold'

    }
});