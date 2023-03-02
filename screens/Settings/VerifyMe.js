import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FONTS } from '../../constants/theme'
import DropDownPicker from 'react-native-dropdown-picker';

const VerifyMe = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);


  return (
    <SafeAreaView>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.screentitlewrapper}>
        <TouchableOpacity style={styles.historybtn}>
        <AntDesign name="left" size={24} color="black"  />
        </TouchableOpacity>
      
      <Text style={styles.hometext}>Home</Text>
      <Text style={styles.paybillstext}>Verification Badge</Text>

      
      </View>

      <View style={styles.content}>
      <Text style={styles.verifymetext}>Get verified</Text>


      <Text style={styles.confirmtext} >Confirm your name</Text>
      <TextInput style={styles.phoneinput}/>

      <Text style={styles.acttext} >Account type (business/personal)</Text>
      <DropDownPicker
     open={open}
     value={value}
     items={items}
     style={styles.dropDownPicker}
     setOpen={setOpen}
     setValue={setValue}
     setItems={setItems}
     dropDownContainerStyle={{
      width: 268,
      marginLeft:55
    }}
   />
     
     <Text style={styles.bundletext} >Business name</Text>
     <TextInput style={styles.phoneinput}/>

     <View style={styles.caccontainer}>
     <Text style={styles.cactext}>CAC certificate</Text>
     <TouchableOpacity style={styles.uploadprofilebtn}>
          <AntDesign name="cloudupload" size={24} color="white" style={styles.cloudicon} />
            <Text style={styles.uploadtext}>Upload</Text>
          </TouchableOpacity>

     </View>

     <View style={styles.caccontainer}>
     <Text style={styles.personalidtext}>Personal ID</Text>
     <TouchableOpacity style={styles.uploadprofilebtn1}>
          <AntDesign name="cloudupload" size={24} color="white" style={styles.cloudicon} />
            <Text style={styles.uploadtext}>Upload</Text>
          </TouchableOpacity>
          
     </View>


     <View>

     <View style={styles.walletcreatedsection}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={styles.walletcreatedtext}>Wallet created?</Text>
     <TouchableOpacity style={styles.createbtn}>
            <Text style={styles.createtext}>Create</Text>
          </TouchableOpacity>
      </View>
     
     <View style={{flexDirection:'row', justifyContent:'space-between'}}>
     <Text style={styles.walletcreatedtext}>Card linked?</Text>
     <TouchableOpacity style={styles.createbtn}>
            <Text style={styles.createtext}>Link</Text>
          </TouchableOpacity>
     </View>

        
          
     </View>
     </View>

     <TouchableOpacity style={styles.getverifiedbtn}>
      <Text style={{fontFamily:FONTS.cabin, fontSize:16, color:'white', fontWeight:'bold'}}>Get Verified</Text>
      
    </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
      
    </SafeAreaView>
  )
}

export default VerifyMe

const styles = StyleSheet.create({

  container:
    {
      backgroundColor:'#FBFFFD',
      height:'100%',
      alignItems: 'center',

    },
    content:
    {
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

      verifymetext:
      {
        marginTop:38,
        marginLeft:25,
        marginRight:281,
        fontFamily:FONTS.cabin,
        fontSize:14,
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
    acttext:{
      marginRight:150,
      marginTop:24,
      fontFamily:FONTS.cabin,
      fontSize:10,
      fontWeight:'bold'
    },

    confirmtext:{
      marginRight:190,
      marginTop:24,
      fontFamily:FONTS.cabin,
      fontSize:10,
      fontWeight:'bold'
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

    dropDownPicker:
    {
      width:268,
      height:40,
      marginLeft:55,
      marginTop:6,
      paddingLeft:120,
      fontSize:16,
      fontWeight:'bold',
      fontFamily:FONTS.cabin,
      
    },

    caccontainer:
    {
      flexDirection:'row',
      alignItems:'center'

    },

    cactext:
    {
      fontFamily:FONTS.cabin,
      fontSize:16,
      marginTop: 40,
      fontWeight:'bold',
      marginLeft: 55,
      marginRight:30
    },

    personalidtext:
    {
      fontFamily:FONTS.cabin,
      fontSize:16,
      marginTop: 40,
      fontWeight:'bold',
      marginLeft:10,

    },
    uploadprofilebtn:
  {
    backgroundColor: '#182430',
    borderRadius:8,
    borderWidth:1,
    width:140,
    height:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginRight:48,
    marginTop:19,

  },

   uploadprofilebtn1:
  {
    backgroundColor: '#182430',
    borderRadius:8,
    borderWidth:1,
    width:140,
    height:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop:19,
    marginLeft: 48

  },

  
  cloudicon:
  {
    marginLeft:16
  },
  uploadtext:
  {
    fontFamily:FONTS.cabin,
    fontSize:16,
    fontWeight:'bold',
    marginRight:10,
    color:'white'
  },
  createtext:
  {
    fontFamily:FONTS.cabin,
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  },

  walletcreatedsection:
  {
    width:334,
    height:112,
    borderRadius:5,
    marginTop:25,
    backgroundColor:'#ECECEC'
  },

  walletcreatedtext:
  {
    fontFamily:FONTS.cabin,
    fontSize:16,
    fontWeight:'bold',
    marginTop:25,
    marginLeft:34


  },
  createbtn:
  {
    backgroundColor: '#182430',
    borderRadius:8,
    width:79,
    height:26,
    alignItems:'center',
    justifyContent:'center',
    marginTop:17,
    marginLeft: 63,
    marginRight:30
  },

  getverifiedbtn:
  {
    backgroundColor: '#182430',
    borderRadius:8,
    width:120,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:17,
  }








})