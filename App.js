import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import {Login, DashboardScreen, MyNetworkScreen, UserProfileScreen, MyCommunityScreen, AddCardScreen, ActiveCardScreen, SendFunds, Settings } from './screens';
import CreatePost from './components/CreatePost';


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
        
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="MyNetworkScreen" component={MyNetworkScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name='MyCommunityScreen' component={MyCommunityScreen} />
        <Stack.Screen name='CreatePost' component={CreatePost} />
        <Stack.Screen name='AddCardScreen' component={AddCardScreen} />
        <Stack.Screen name='ActiveCardScreen' component={ActiveCardScreen} />
        <Stack.Screen name="SendFunds" component={SendFunds} />
        <Stack.Screen name="Settings" component={Settings} />

       </Stack.Navigator >
    </NavigationContainer>

    
  )
}

