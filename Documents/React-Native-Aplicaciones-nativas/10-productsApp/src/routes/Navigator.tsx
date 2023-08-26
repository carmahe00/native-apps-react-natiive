import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import ProtectedScreen from '../screens/ProtectedScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ProductsNavigator from './ProductsNavigator';

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Protected: undefined;
    Products: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
    const { status } = useContext(AuthContext);
    if (status === 'checking') {
        return <LoadingScreen />;
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                (status !== 'authenticated')
                    ? (
                        <>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="Register" component={RegisterScreen} />
                        </>
                    )
                    : (
                        <>
                            <Stack.Screen name="Products" component={ProductsNavigator} />
                            <Stack.Screen name="Protected" component={ProtectedScreen} />
                        </>
                    )
            }
        </Stack.Navigator>
    );
};
