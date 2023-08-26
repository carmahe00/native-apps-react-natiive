import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import PokemonScreen from '../screen/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemoninterfaces';

export type RootStackParamList = {
    Home: undefined
    Pokemon: { simplePokemon: SimplePokemon, color: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} />
        </Stack.Navigator>
    );
};

export default Navigator;
