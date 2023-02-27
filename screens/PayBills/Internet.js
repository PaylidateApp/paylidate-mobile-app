import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FONTS } from '../../constants/theme';
import DropDownPicker from 'react-native-dropdown-picker';

const Internet = () => {

  const [networkOpen, setNetworkOpen] = useState(false);
  const [networkValue, setNetworkValue] = useState(null);
  const [network, setNetwork] = useState([
    {label: 'MTN', value: 'mtn'},
    {label: 'Airtel', value: 'airtel'}
  ]);

  const [bundleOpen, setBundleOpen] = useState(false);
  const [bundleValue, setBundleValue] = useState(null);
  const [bundle, setBundle] = useState([
    {label: 'N10, 000', value: 'N10, 000'},
    {label: 'N20, 000', value: 'N30, 000'}
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screentitlewrapper}>
        <TouchableOpacity style={styles.historybtn}>
        <AntDesign name="left" size={24} color="black"  />
        </TouchableOpacity>
      
      <Text style={styles.hometext}>Home</Text>
      <Text style={styles.paybillstext}>Internet</Text>

      
      </View>

      <View style={styles.content}>
    <Text style={styles.networktext}>Network</Text>
    <DropDownPicker
     open={networkOpen}
     value={networkValue}
     items={network}
     style={styles.dropDownPicker}
     setOpen={setNetworkOpen}
     setValue={setNetworkValue}
     setItems={setNetwork}
   />
    <Text style={styles.bundletext} >Amount</Text>
    <DropDownPicker
     open={bundleOpen}
     value={bundleValue}
     items={bundle}
     style={styles.dropDownPicker}
     setOpen={setBundleOpen}
     setValue={setBundleValue}
     setItems={setBundle}
   />

    <View style={styles.phonenumberlabel}>
    <Text style={styles.phonenumbertext} >Account ID</Text>
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

export default Internet
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
      fontFamily:FONTS.cabin,
      fontSize:16,
      fontWeight:'bold'

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
      marginTop:24,

    },
    phonenumbertext:
    {
      marginRight:170,
      fontFamily:FONTS.cabin,
      fontWeight:'bold',
      fontSize:10

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
      fontSize:'bold',
      fontWeight:'bold',

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