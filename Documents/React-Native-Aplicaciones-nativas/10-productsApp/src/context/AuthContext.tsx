import React, { createContext, FC, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import caffeApi from '../api/caffeApi';
import { Usuario, LoginResponse, LoginData, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';
import { Alert } from 'react-native';
import { cartchError } from '../utils/errorCatch';
type AuthContextProp = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'no-authenticated';
    signUp: (registerData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}
const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
};
export const AuthContext = createContext({} as AuthContextProp);
const AuthProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);
    const signUp = async (registerData: RegisterData) => {
        try {
            const { data } = await caffeApi.post<LoginResponse>('/usuarios', registerData);
            dispatch({
                type: 'signUp', payload: {
                    user: data.usuario,
                    token: data.token,
                },
            });
            await AsyncStorage.setItem('@token', data.token);
        } catch (err) {
            cartchError({ err, dispatch });
        }
    };
    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const { data } = await caffeApi.post<LoginResponse>('/auth/login', { correo, password });
            dispatch({
                type: 'signUp', payload: {
                    user: data.usuario,
                    token: data.token,
                },
            });
            await AsyncStorage.setItem('@token', data.token);
        } catch (err) {
            cartchError({ err, dispatch });
        }
    };

    const logOut = async () => {
        await AsyncStorage.removeItem('@token');
        dispatch({ type: 'logout' });

    };
    const removeError = () => {
        dispatch({ type: 'removeError' });
    };
    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem('@token');
            if (!token) {
                return dispatch({ type: 'notAuthenticated' });
            }
            const { data, status } = await caffeApi.get('/auth'); // get new Toeken
            if (status !== 200) {
                return dispatch({ type: 'notAuthenticated' });
            }
            await AsyncStorage.setItem('@token', data.token);
            dispatch({
                type: 'signUp', payload: {
                    user: data.usuario,
                    token: data.token,
                },
            });

        } catch (error) {
            Alert.alert('Error de espacio');
        }
    };
    useEffect(() => {
        checkToken();
    }, []);

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
