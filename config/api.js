import instance from "./ApiManager";
import axios from 'axios';

export const login = async () => {
    try {
        const result = await axios.post('https://paylidate-production.up.railway.app/api/login', {
            data: {
                email: 'segun8427@gmail.com',
                password: 'Cherubim&1738'
            },
            headers: { 'content-type': 'application/json' },
        });
        console.log(data);
        return data;
    } catch (error) {
        return error.message;
    }
}

export const signUp = async (data) => {
    try {
        const result = await instance.post('/api/signup', {
            headers: { 'content-type': 'application/json' },
            data: data
        });
        return result;
    } catch (error) {
        return error.message;
    }
}

export const logout = async (data) => {
    //  
};