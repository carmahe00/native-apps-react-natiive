import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Definir cómo luce, qué información tendre
export interface AutState {
    isLoggedIn: boolean
    username?: string
    favoriteIcon?: string
}

// Estado inicial
export const authInitialState: AutState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AutState
    signIn: () => void,
    changeFavoriteIcon: (iconName: string) => void,
    logout: () => void,
    changeUsername: (username:string) => void,
}

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    const signIn = () => {
        dispatch({ type: 'signIn' });
    };
    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeIcon', payload: iconName });
    };
    const logout = () => {
        dispatch({ type: 'logout' });
    };
    const changeUsername = (username:string) =>{
        dispatch({type:'changeUsername', payload: username});
    };
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername,
        }} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
