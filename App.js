import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './context/AuthContext';

import React, { useState } from 'react';

import { Login, DashboardScreen, MyNetworkScreen, UserProfileScreen, VerifyAccount, VerifyMe, SendFunds, Settings, SignUp, ResetInput, PayBills, Airtime, DataBundle, Internet, MyCommunityScreen, AddCardScreen, ActiveCardScreen, MyDeals } from './screens';
import CreatePost from './components/CreatePost';
import Tabs from './components/tabs';
import PostItem from './components/CreatePost';



// import Logo from "./Pages/Signup/Logo";
// import Input from "./screens/Signup/Input";
// import ResetInput from './screens/Signup/ResetInput';
// import ChatScreen from './screens/Dmbuyer/ChatScreen';
// import OrderModal from './screens/Product/OrderModal';
// import ViewDeal from './screens/Transaction/ViewDeal';
// import ViewModal from './screens/Transaction/ViewModal';
// import MyDeals from './screens/MyDeals';





export default function App() {
  const [userData, setUserData] = useState(null);

  const authContext = {
    userData,
    setUserData,
  };

  const [fontsLoaded] = useFonts({
    Cabin: require('./assets/fonts/Cabin-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  const Stack = createStackNavigator();
  return (
    // wrap app with authcontextprovider
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="DashboardScreen" component={Tabs} />
          <Stack.Screen name="ResetInput" component={ResetInput} />
          <Stack.Screen name="PayBills" component={PayBills} />
          <Stack.Screen name="MyNetworkScreen" component={MyNetworkScreen} />
          <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
          <Stack.Screen name='MyCommunityScreen' component={MyCommunityScreen} />
          <Stack.Screen name='CreatePost' component={CreatePost} />
          <Stack.Screen name='AddCardScreen' component={AddCardScreen} />
          <Stack.Screen name='ActiveCardScreen' component={ActiveCardScreen} />
          <Stack.Screen name="SendFunds" component={SendFunds} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Airtime" component={Airtime} />
          <Stack.Screen name="Internet" component={Internet} />
          <Stack.Screen name="DataBundle" component={DataBundle} />
          <Stack.Screen name="VerifyMe" component={VerifyMe} />
          <Stack.Screen name="Post" component={PostItem} />
          <Stack.Screen name="MyDeals" component={MyDeals} />

        </Stack.Navigator>

      </NavigationContainer>
    </AuthContext.Provider>
  );
}

