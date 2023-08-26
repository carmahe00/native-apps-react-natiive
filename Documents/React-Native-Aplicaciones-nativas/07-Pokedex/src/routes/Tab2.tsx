import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../screen/SearchScreen';
import { RootStackParamList } from './Navigator';
import PokemonScreen from '../screen/PokemonScreen';

const Tab2 = createNativeStackNavigator<RootStackParamList>();

export const Tab2Screen = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab2.Screen name="Home" component={SearchScreen} />
            <Tab2.Screen name="Pokemon" component={PokemonScreen} />
        </Tab2.Navigator>
    );
};

export default Tab2;
