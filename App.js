import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';


import React from 'react'

import {Login, DashboardScreen, MyNetworkScreen, UserProfileScreen, SendFunds, Settings } from './screens';


// import Logo from "./Pages/Signup/Logo";
// import Input from "./screens/Signup/Input";
// import ResetInput from './screens/Signup/ResetInput';
// import ChatScreen from './screens/Dmbuyer/ChatScreen';
// import OrderModal from './screens/Product/OrderModal';
// import ViewDeal from './screens/Transaction/ViewDeal';
// import ViewModal from './screens/Transaction/ViewModal';
// import MyDeals from './screens/MyDeals';





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
        <Stack.Screen name="SendFunds" component={SendFunds} />
        <Stack.Screen name="Settings" component={Settings} />

       </Stack.Navigator >
    </NavigationContainer>

    
  )
}

