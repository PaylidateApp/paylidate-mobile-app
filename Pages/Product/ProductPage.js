import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const ProductPage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <TouchableOpacity  style={styles.back}>
            <FontAwesome style={styles.icon} name="chevron-left" size={22} color="#000ff" />
            </TouchableOpacity>
        <Text style={styles.txt1}>Sold by:</Text>
        <Text style={styles.txt2}>@Lilian444 <FontAwesome style={styles.icon} name="check-circle-o" size={22} color="#000ff" /></Text>
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
        <View>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</Text>
        </View>
        <View>
        <Button style={styles.btn} title="Make Payment" color="#182430" />
        </View>
    </View>
  )
}

export default ProductPage

const styles = StyleSheet.create({
  container: {
    margin: 30,
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
    marginRight:60,
},

nikon: {
  marginTop: 14,
  fontSize: 28,
  alignSelf:'center',
},

camera: {
  fontSize: 21,
  fontWeight: 700,
},

img: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},

image: {
  margin: 5,
  justifyContent: 'center',
height: 80,
width: 80,
},
})