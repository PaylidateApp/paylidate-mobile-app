import axios from "axios";
import { API_URL, API_URL1, TEST_URL } from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";

// var authToken = null;

// authToken = AsyncStorage.getItem("paylidateToken").then((result) => {
//     if (result !== null) {
//         return result;
//     } else {
//         return 'empty';
//     }
// }).then((response) => { return JSON.parse(response) }).catch((error) => console.log(error));

// const token = 'Bearer ' + authToken
// console.log(token)

const instance = axios.create({
    // baseURL: 'https://paylidate-production.up.railway.app',
    baseURL: API_URL,
    responseType: 'json',
    withCredentials: true,
    timeout: 30000,
});



export default instance;