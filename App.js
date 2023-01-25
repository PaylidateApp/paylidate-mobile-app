import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';

import React from 'react'
import {Login} from './screens'
export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Cabin-Regular.ttf'),
  });
  
  return (
    <View style={styles.home}>
      <Login />
    </View>
  )
}



const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#EB6117',
    alignItems: 'center',
    
  },
});