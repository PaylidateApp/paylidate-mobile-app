import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from './context/AuthContext';
import Routes from './Navigations/Routes';
import instance from './config/ApiManager';


export default function App() {
  const [userData, setUserData] = useState("");

  // axios.defaults.headers.common["Authorization"] = token;

  const checkLoginCredentials = () => {
    AsyncStorage
      .getItem('paylidateCredentials')
      .then((result) => {
        if (result !== null) {
          setUserData(JSON.parse(result))

        } else {
          setUserData(null);
        }
      })
      .catch(error => alert(error));
  }

  useEffect(() => {
    checkLoginCredentials();
    return () => {
      userData;
    }
  }, [userData]);

  const [fontsLoaded] = useFonts({
    Cabin: require('./assets/fonts/Cabin-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    // wrap app with authcontextprovider
    <AuthContext.Provider value={{ userData, setUserData }}>
      <Routes />
    </AuthContext.Provider>
  );
}

