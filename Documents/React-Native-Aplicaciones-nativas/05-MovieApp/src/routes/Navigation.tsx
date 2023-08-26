import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type ParamList = {
    Home: undefined
    Detail: Movie
}

const Stack = createStackNavigator<ParamList>();
const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail"  component={DetailScreen} />
        </Stack.Navigator>
    );
};

export default Navigation;
