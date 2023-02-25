import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ViewDeal = () => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <TouchableOpacity  style={styles.back}>
            <FontAwesome style={styles.icon} name="chevron-left" size={22} color="#000ff" />
            </TouchableOpacity>
            <Text style={styles.txt1}>Sold by:</Text>
            <Text style={styles.txt2}>@Lilian444 <FontAwesome style={styles.icon} name="check-circle-o" size={22} color="#000ff" /></Text>
            <MaterialIcons style={styles.cicon} name="chat" size={22} color="#000ff" />
        </View>
        <View style={styles.nikon}>
          <Text style={styles.camera}>Nikon Camera DSLI XP 600</Text> 
        </View>
        <View style={styles.img}>
          <Image style={styles.image} source={require('../../assets/camera.png')} />
        </View>
        <View style={styles.description}>
          <Text style={styles.amount1}>A.Q : 12 </Text> 
          <Text style={styles.amount2}>N 660,000</Text> 
        </View>
        <View style={styles.thirdtxt}>
            <Text style={styles.amount3}>Total amount paid (with delivery)</Text>
            <Text style={styles.amount4}>N 662,000</Text> 
        </View >
        <View style={styles.des}>
            <Text style={styles.des1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</Text>
        </View>
        <View style={styles.butin}>
          <Button style={styles.btn} title="Raise a dispute" color="#182430" />
        </View>

        <View style={styles.butin1}>
          <Button style={styles.btn} title="Confirm this transaction" color="#182430" />
        </View>

        <View style={styles.butin2}>
          <Button style={styles.btn} title="Report this transaction" color="#182430" />
        </View>
    </View>
  )
}

export default ViewDeal

const styles = StyleSheet.create({

  container: {
    margin: 20,
  },

  innerContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    alignItems:'center',
    justifyContent: 'space-between',

},

txt1: {
    marginRight:20,
},

txt2: {
    marginRight:30,
},

nikon: {
  marginTop: 14,
  fontSize: 28,
  alignSelf:'center',
},

camera: {
  fontSize: 22,
},

img: {
  marginTop:5,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},

image: {
  justifyContent: 'center',
  height: 240,
  width: 240,
},

description: {
  margin: 4,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-between',

},

amount1: {
  marginLeft:30,
  fontSize:20,
},

amount2: {
  marginRight:30,
  fontSize:20,
},

thirdtxt: {
    margin: 4,
    alignItems:'center',
    justifyContent: 'space-between',
  
},

amount4: {
    marginTop:7,
    marginRight:30,
    fontSize:20,
},

des: {
    justifyContent: 'center',
    alignItems: 'center', 
},
  
des1: {
    fontSize: 13,
    paddingHorizontal: 40,
    
},

butin: {
    marginTop: 15,
    paddingHorizontal: 30,
},

butin1: {
    marginTop: 15,
},

butin2: {
    marginTop: 15,
    borderRadius: 30,
},
  
  

})






