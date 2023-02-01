import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
// import { useCallback } from 'react';

import Dashboard from './components/Dashboard';

import React from 'react'
import {Login} from './screens'
// import * as SplashScreen from 'expo-splash-screen';
export default function App() {


  const [fontsLoaded] = useFonts({
    'Roboto' : require('./assets/fonts/Roboto-Regular.ttf'),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  
  return (
    <View style={styles.container}>
      <Dashboard />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#EB6117',
    alignItems: 'center',
    
  },
});