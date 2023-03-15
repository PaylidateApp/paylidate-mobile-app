import axios from "axios";
import { API_URL, API_URL1, TEST_URL } from '@env';

const instance = axios.create({
    // baseURL: 'https://paylidate-production.up.railway.app',
    baseURL: API_URL,
    responseType: 'json',
    withCredentials: true,
    timeout: 30000,
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
});


export default instance;