
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import React from 'react'
import {Login, Dashboard, SendFunds, Settings} from './screens'

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
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SendFunds" component={SendFunds} />
        <Stack.Screen name="Settings" component={Settings} />
       </Stack.Navigator >
    </NavigationContainer>

    
  )
}



