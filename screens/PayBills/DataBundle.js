import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FONTS } from '../../constants/theme'
import DropDownPicker from 'react-native-dropdown-picker';
import { SelectList } from 'react-native-dropdown-select-list'

const DataBundle = () => {

  // const [networkOpen, setNetworkOpen] = useState(false);
  // const [networkValue, setNetworkValue] = useState(null);
  // const [network, setNetwork] = useState([
  //   {label: 'MTN', value: 'mtn'},
  //   {label: 'Airtel', value: 'airtel'}
  // ]);

  // const [bundleOpen, setBundleOpen] = useState(false);
  // const [bundleValue, setBundleValue] = useState(null);
  // const [bundle, setBundle] = useState([
  //   {label: '200MB', value: '200MB'},
  //   {label: '1GB', value: '1GB'}
  // ]);

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  const dataa = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.screentitlewrapper}>
        <TouchableOpacity style={styles.historybtn}>
        <AntDesign name="left" size={24} color="black"  />
        </TouchableOpacity>
      
      <Text style={styles.hometext}>Home</Text>
      <Text style={styles.paybillstext}>Buy Data</Text>

      
      </View>

    <View style={styles.content}>
    <Text style={styles.networktext}>Network</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        maxHeight={100}
        search={false}
        fontFamily={FONTS.cabin}
        boxStyles={{width:268, height:40, marginTop:6,}}
    />
    <Text style={styles.bundletext} >Bundle</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={dataa} 
        save="value"
        maxHeight={100}
        search={false}
        fontFamily={FONTS.cabin}
        boxStyles={{width:268, height:40, marginTop:6,}}
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
      </KeyboardAvoidingView>
      

    </SafeAreaView>
  )
}

export default DataBundle
const styles = StyleSheet.create({
  container:
  {
    backgroundColor:'#FBFFFD',
    height:'100%',
    alignItems: 'center',
  
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
      paddingBottom: 40,
      borderRadius:10,
      backgroundColor:'#FFF8F4',
      shadowColor: 'black',
      shadowOffset: { width: 3, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 8,  
      elevation: 4,
      alignItems:'center',
      marginTop:26

    },
    dropDownPicker:
    {
      width:268,
      height:40,
      marginLeft:46,
      marginTop:6,
      fontFamily:FONTS.cabin,
      fontSize:16,
      fontWeight:'bold',
      paddingLeft:80

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
      marginRight:130,
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
      fontFamily:FONTS.cabin,
      fontSize:16,
      fontWeight:'bold',
      paddingLeft:20,
      marginTop:6
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