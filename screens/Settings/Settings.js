import { View, SafeAreaView, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Switch, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { FONTS } from '../../constants/theme'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Settings = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

const [displayProfile, setDisplayProfile] = useState(false)
const [displayContact, setDisplayContact] = useState(false)
const [displayCommerce, setDisplayCommerce] = useState(false)
const [displayPayments, setDisplayPayments] = useState(false)
const [displaySocialMedia, setDisplaySocialMedia] = useState(false)
const [displaySecurity, setDisplaySecurity] = useState(false)
const [displayHelp, setDisplayHelp] = useState(false)

const [displayRightIcon, setDisplayRightIcon] = useState(true)
const [contactRightIcon, setContactRightIcon] = useState(true)
const [commerceRightIcon, setCommerceRightIcon] = useState(true)
const [paymentsRightIcon, setPaymentsRightIcon] = useState(true)
const [socialRightIcon, setSocialRightIcon] = useState(true)
const [helpRightIcon, setHelpRightIcon] = useState(true)
const [securityRightIcon, setSecurityRightIcon] = useState(true)

const toggleDisplayprofile = () => {
  setDisplayProfile(!displayProfile)
  setDisplayRightIcon(!displayRightIcon)

}



const toggleDisplaycontact = () => {
  setDisplayContact(!displayContact)
  setContactRightIcon(!contactRightIcon)

}

const toggleDisplaycommerce = () => {
  setDisplayCommerce(!displayCommerce)
  setCommerceRightIcon(!commerceRightIcon)

}

const toggleDisplaypayments = () => {
  setDisplayPayments(!displayPayments)
  setPaymentsRightIcon(!paymentsRightIcon)

}

const toggleDisplaysocialmedia = () => {
  setDisplaySocialMedia(!displaySocialMedia)
  setSocialRightIcon(!socialRightIcon)

}

const toggleDisplaysecurity = () => {
  setDisplaySecurity(!displaySecurity)
  setSecurityRightIcon(!securityRightIcon)

}

const toggleDisplayHelp = () => {
  setDisplayHelp(!displayHelp)
  setHelpRightIcon(!helpRightIcon)

}

const navigation = useNavigation()

  const navigate_verifyme = async () => 
  {
         navigation.navigate('VerifyMe')
         
  }


  return (
    <SafeAreaView style={styles.container}>

<KeyboardAvoidingView
behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={styles.screentitlewrapper}>
        <TouchableOpacity style={styles.historybtn}>
        <AntDesign name="left" size={24} color="#182430"  />
        </TouchableOpacity>
      
      <Text style={styles.hometext}>Home</Text>
      <Text style={styles.settingstext}>Settings</Text>

      
      </View>

      <View style={styles.screentitlewrap}>
      <Text style={styles.acctsettingstext}>Account Settings</Text>

<TouchableOpacity style={styles.verifybtn} onPress={navigate_verifyme}>
<Text style={styles.verifymetext}>Verify me</Text>
</TouchableOpacity>
      </View>

      
     
    <ScrollView>

    <TouchableOpacity style={styles.settingscontainer} onPress={toggleDisplayprofile}>

    
    <EvilIcons name="user" size={24} color="#182430" style={styles.firsticon} />
      <Text style={styles.settingsoptiontext}>Profile</Text>
{
  displayRightIcon && <AntDesign name="right" size={24} color="#182430" style={styles.secondicon} />
}
      

      { displayProfile && <AntDesign name="down" size={24} color="#182430" style={styles.secondicon} />}
    </TouchableOpacity>

    {
      displayProfile && <View style={styles.optionsettings}>
        
        <View style={styles.profilepiccontainer}>
        <Image
        style={styles.profileimg}
        source={require("../../assets/favicon.png")}
      />
          <TouchableOpacity style={styles.uploadprofilebtn}>
          <AntDesign name="cloudupload" size={24} color="#182430" style={styles.cloudicon} />
            <Text style={styles.uploadtext}>Upload</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Full name</Text>

          <TextInput style={styles.usernameinputbox} placeholder="Joy Ojah">
          </TextInput>

          <Text style={styles.label}>User name</Text>
          
          <TextInput style={styles.usernameinputbox} placeholder="@Joywrites">
          </TextInput>
         
         <TouchableOpacity style={styles.updateprofilebtn}><Text style={styles.updatetext}>Update</Text></TouchableOpacity>
      </View>
    }
    
    <TouchableOpacity style={styles.settingscontainer} onPress={toggleDisplaycontact}>
      
    <MaterialIcons name="contact-mail" size={24} color="#182430" style={styles.firsticon} />
    
      <Text style={styles.settingsoptiontext}>Contact details</Text>

      { contactRightIcon && <AntDesign name="right" size={24} color="#182430" style={styles.secondicon} />}

      { displayContact  && <AntDesign name="down" size={24} color="#182430" style={styles.secondicon} />}
    </TouchableOpacity>

    { displayContact &&
      <View style={styles.optionsettings}>
        <Text style={styles.label}>Email</Text>

          <TextInput style={styles.usernameinputbox}>
           
          </TextInput>

          <Text style={styles.label}>Phone Number</Text>
          
          <TextInput style={styles.usernameinputbox}>
           
          </TextInput>
         
         <TouchableOpacity style={styles.updateprofilebtn}><Text style={styles.updatetext}>Update</Text></TouchableOpacity>
      </View>
    }

    <TouchableOpacity style={styles.settingscontainer} onPress={toggleDisplaycommerce}>

    <FontAwesome5 name="shopify" size={24} color="#182430" style={styles.firsticon} />
      <Text style={styles.settingsoptiontext}>Social Commerce</Text>

      {commerceRightIcon && <AntDesign name="right" size={24} color="#182430" style={styles.secondicon} /> }

      { displayCommerce && <AntDesign name="down" size={24} color="#182430" style={styles.secondicon} />}
    </TouchableOpacity>

    { displayCommerce &&
      <View style={styles.optionsettings}>
        <Text style={styles.label}>Shop's primary Location</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>Delivery</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>Shop's email</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>Return Policy</Text>

<TextInput style={styles.returnpoilcyinputbox}>
</TextInput>

<TouchableOpacity style={styles.updateprofilebtn}><Text style={styles.updatetext}>Update</Text></TouchableOpacity>
      </View>
    }

    <TouchableOpacity style={styles.settingscontainer} onPress={toggleDisplaypayments}>

    <MaterialCommunityIcons name="wallet-plus" size={24} color="#182430" style={styles.firsticon} />
      <Text style={styles.settingsoptiontext}>Payments</Text>

      { paymentsRightIcon && <AntDesign name="right" size={24} color="#182430" style={styles.secondicon} /> }

      { displayPayments && <AntDesign name="down" size={24} color="#182430" style={styles.secondicon} />}
    </TouchableOpacity>


    { displayPayments &&
      <View style={styles.optionsettings}>
        <Text style={styles.label}>Bank Name</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>Account Number</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>Verify Account Name</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>Transactions withdrawal</Text>

<View style={styles.withdrawtobankcontainer}>
<Text style={styles.label}>Withdraw to Bank</Text>

<Switch
        trackColor={{false: '#182430', true: '#182430'}}
        thumbColor={isEnabled ? 'white' : '#182430'}
        ios_backgroundColor="#FFFFFF"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
        
      />
</View>

<Text style={styles.label}>Withdrawal is set to your wallet by default</Text>

<TouchableOpacity style={styles.updateprofilebtn}><Text style={styles.updatetext}>Update</Text></TouchableOpacity>
      </View>
    }



    <TouchableOpacity style={styles.settingscontainer} onPress={toggleDisplaysocialmedia}>

    <Ionicons name="share-social" size={24} color="#182430" style={styles.firsticon} />
      <Text style={styles.settingsoptiontext}>Social Media Accounts</Text>

      { socialRightIcon && <AntDesign name="right" size={24} color="#182430" style={styles.secondicon} />}

      { displaySocialMedia && <AntDesign name="down" size={24} color="#182430" style={styles.secondicon} />}
    </TouchableOpacity>

{ displaySocialMedia &&
      <View style={styles.optionsettings}>
        <Text style={styles.label}>Facebook URL</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>Twitter URL</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>Instagram Handle</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<Text style={styles.label}>WhatsApp number</Text>

<TextInput style={styles.usernameinputbox}>
</TextInput>

<TouchableOpacity style={styles.updateprofilebtn}><Text style={styles.updatetext}>Update</Text></TouchableOpacity>
      </View>
    }
    <TouchableOpacity style={styles.settingscontainer} onPress={toggleDisplaysecurity}>

    <MaterialCommunityIcons name="security" size={24} color="#182430" style={styles.firsticon} />
      <Text style={styles.settingsoptiontext}>Security</Text>

      { securityRightIcon && <AntDesign name="right" size={24} color="#182430" style={styles.secondicon} />}

      { displaySecurity && <AntDesign name="down" size={24} color="#182430" style={styles.secondicon} />}
    </TouchableOpacity>

    { displaySecurity &&
      <View style={styles.optionsettings}>
        <Text>Contact</Text>
      </View>
    }

    <TouchableOpacity style={styles.settingscontainer} onPress={toggleDisplayHelp}>

    
    <MaterialCommunityIcons name="handshake-outline" size={24} color="#182430" style={styles.firsticon}/>
      <Text style={styles.settingsoptiontext}>Help</Text>
      
      
     {helpRightIcon && <AntDesign name="right" size={24} color="#182430" style={styles.secondicon} />}
      { displayHelp && <AntDesign name="down" size={24} color="#182430" style={styles.secondicon} />}
    </TouchableOpacity>
   
   { displayHelp &&
      <View style={styles.optionsettings}>
        <Text>Contact</Text>
      </View>
    }
    </ScrollView>

     <View>
      
      </View> 
</KeyboardAvoidingView>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screentitlewrapper:
  {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop:12
      
      
  },

  hometext:{
    fontSize:14,
    fontWeight:'bold',
    fontFamily:FONTS.cabin
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
  firsticon:
  {
    marginLeft:27.08
  },

  settingsoptiontext:
  {
    marginRight: 32.08,
    fontFamily:FONTS.cabin,
    fontSize:16,
    fontWeight:500
  },
  secondicon:
  {
    marginRight:20.73
  },
  
  settingscontainer:
  {
    alignItems: 'center',
    flexDirection: 'row',
    height:50,
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor: 'grey',
    backgroundColor:'#FFF8F4'
  },
  
  historybtn:{
    marginLeft:25
  },

  settingstext:{
    marginLeft:75,
    fontFamily:FONTS.cabin,
    fontSize:18,
    fontWeight:'bold'
  },
acctsettingstext:{
  fontFamily:FONTS.cabin,
  fontSize: 14,
  fontWeight:500,
  marginLeft:25,
  marginTop:28

},
  verifybtn:
  {
    backgroundColor: '#319ED9',
    borderRadius: 10,
    width: 81,
    height:20,
    marginBottom:22,
    marginLeft:150,
    alignItems: 'center',
    justifyContent: 'center',

  },

  verifymetext:
  {
    color:'#FFFFFF',
    fontFamily:FONTS.cabin,
    fontSize:14,
    fontWeight:500,
    
  },
  profilepiccontainer:
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  profileimg:
  {
    borderWidth: 1,
    height:76,
    width:76,
    borderRadius:40,
    marginLeft:60,
    marginTop:20
  },

  uploadprofilebtn:
  {
    backgroundColor: '#D9D9D9',
    borderRadius:8,
    borderWidth:1,
    width:140,
    height:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginRight:50,
    marginTop:38,
    borderColor:'grey'


  },
  label:{
    fontFamily:FONTS.cabin,
    fontSize:10,
    fontWeight:'medium',
    marginLeft:64,
    marginTop:15

  },
  usernameinputbox:
  {
    width:268,
    height:40,
    borderWidth:1,
    borderRadius:8,
    marginTop:6,
    marginLeft:60,
    fontFamily:FONTS.cabin,
    paddingLeft:20,
    fontSize:16,
    fontWeight:'bold'


  },

  returnpoilcyinputbox:{
    width:268,
    height:95,
    borderWidth:1,
    borderRadius:8,
    marginTop:6,
    marginLeft:60,
    fontFamily:FONTS.cabin,
    fontSize:16,
    fontWeight:'bold',
    paddingLeft:20
  },
  withdrawtobankcontainer:
  {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  withdrawbanklabel:{
    marginLeft: 64,
    fontFamily:FONTS.cabin,
    fontSize:10,
    fontWeight:'medium',
    marginLeft:64,
    marginTop:15

  },
  switch:{
    marginRight: 105,
    marginTop:15,
    borderWidth:1,
    borderColor:'#182430'
  },
   placeholder:{
    fontFamily:FONTS.cabin,
    fontSize:16,
    fontWeight:'bold'

      
  },
  uploadtext:
  {
    fontFamily:FONTS.cabin,
    fontSize:16,
    fontWeight:'bold',
    marginRight:10
  },
  updateprofilebtn:{
    width: 120,
    height:40,
    borderRadius:8,
    backgroundColor:'#182430',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:40,
    marginLeft:128

  },
  updatetext:{
    color:'#FFFFFF',
    fontFamily:FONTS.cabin,
    fontSize:16,
    fontWeight:500

  },
  optionsettings:{
    paddingBottom:23,
    
  },
  cloudicon:
  {
    marginLeft:16
  },
  container:
  {
    backgroundColor:'#FBFFFD'
  }
  });
export default Settings