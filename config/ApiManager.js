import axios from "axios";
import { API_URL, TEST_URL } from '@env';

const instance = axios.create({
    baseURL: 'https://paylidate-production.up.railway.app',
    // baseURL: 'http://172.20.10.5:8000/',
    // baseURL: 'http://localhost:8000/',
    responseType: 'json',
    withCredentials: true,
    timeout: 30000,
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
});


export default instance;