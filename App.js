import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from './context/AuthContext';
import Routes from './Navigations/Routes';
import instance from './config/ApiManager';


export default function App() {
  const [userData, setUserData] = useState("");
  const [token, setToken] = useState(null)

  // axios.defaults.headers.common["Authorization"] = token;

  const checkLoginCredentials = async () => {
    await AsyncStorage
      .getItem('paylidateCredentials')
      .then((result) => {
        if (result !== null) {
          setUserData(JSON.parse(result))

        } else {
          setUserData(null);
        }
      })
      .catch(error => alert(error));

    await AsyncStorage.getItem("paylidateToken").then((result) => {
      if (result !== null) {
        return result;
      } else {
        return 'empty';
      }
    }).then((response) => { setToken(JSON.parse(response)) }).catch((error) => console.log(error));

  }
  const authToken = 'Bearer ' + token;
  instance.defaults.headers.common["Authorization"] = authToken;

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

