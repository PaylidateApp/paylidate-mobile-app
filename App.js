import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { useCallback } from 'react';

// import Dashboard from './components/Dashboard';

import React from 'react'
import {Login, DashboardScreen, MyNetworkScreen, UserProfileScreen, MyCommunityScreen, AddCardScreen } from './screens';
import CreatePost from './components/CreatePost';

export default function App() {


  const [fontsLoaded] = useFonts({
    Cabin : require('./assets/fonts/Cabin-Regular.ttf'),
  });

  if (!fontsLoaded) return null;
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}> 

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="MyNetworkScreen" component={MyNetworkScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name='MyCommunityScreen' component={MyCommunityScreen} />
        <Stack.Screen name='CreatePost' component={CreatePost} />
        <Stack.Screen name='AddCardScreen' component={AddCardScreen} />
       </Stack.Navigator >
    </NavigationContainer>

    
  )
}



