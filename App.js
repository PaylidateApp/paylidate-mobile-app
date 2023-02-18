
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import React from 'react'

import {Login, DashboardScreen, MyNetworkScreen, UserProfileScreen } from './screens';


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

       </Stack.Navigator >
    </NavigationContainer>

    
  )
}



