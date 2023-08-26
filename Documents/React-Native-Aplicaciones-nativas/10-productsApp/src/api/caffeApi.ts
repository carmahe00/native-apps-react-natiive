import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const baseURL = 'http://192.168.20.21:8080/api';
const caffeApi = axios.create({
    baseURL,
});

caffeApi.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
        config.headers!['x-token'] = token;
    }
    return config;
});

export default caffeApi;
