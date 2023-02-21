import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'

import {Login, DashboardScreen, MyNetworkScreen, UserProfileScreen, SendFunds, Settings,SignUp, ResetInput, PayBills } from './screens';


// import Logo from "./Pages/Signup/Logo";
// import Input from "./Pages/Signup/Input";
// import ResetInput from './Pages/Signup/ResetInput';
// import ChatScreen from './Pages/Dmbuyer/ChatScreen';
// import ProductPage from './Pages/Product/ProductPage';
// import OrderModal from './Pages/Product/OrderModal';
// import ViewDeal from './Pages/Transaction/ViewDeal';
// import ViewModal from './Pages/Transaction/ViewModal';



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
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ResetInput" component={ResetInput} />
        <Stack.Screen name="PayBills" component={PayBills} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="MyNetworkScreen" component={MyNetworkScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="SendFunds" component={SendFunds} />
        <Stack.Screen name="Settings" component={Settings} />

       </Stack.Navigator >
    </NavigationContainer>

    
  )
}

