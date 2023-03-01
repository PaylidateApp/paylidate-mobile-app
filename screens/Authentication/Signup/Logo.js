import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.img}>
      <Image
      source={require('../../../assets/splash_logo.png')}
      style={{width:165, height:183}}

      />
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        paddingTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})