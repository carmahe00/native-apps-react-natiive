import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, StyleSheet, Text, useWindowDimensions, TouchableOpacity, Image, ActivityIndicator, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RootStackParamList } from '../routes/Navigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useOrientation } from '../hooks/useOrientation';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

type PropsType = NativeStackScreenProps<RootStackParamList, 'Pokemon'>;

const PokemonScreen = ({ route, navigation }: PropsType) => {
    const { height } = useWindowDimensions();
    const orientation = useOrientation();
    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { pokemon, isLoading } = usePokemon(id);
    return (
        <View style={styles.container} >
            <StatusBar
                backgroundColor={color}
                animated={true}
            />
            <View style={[styles.headerContainer, { backgroundColor: color, height: height * 0.5 }]} >
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={[styles.backButton, { top: top + 10 }]}
                >
                    <Ionicons
                        name="arrow-back-outline"
                        size={35}
                        color="white"
                    />
                </TouchableOpacity>
                <Text style={[styles.pokemonName, { top: top + 45, fontSize: orientation === 'PORTRAIT' ? 40 : 20 }]} >
                    {name + '\n'}
                    #{id + '\n'}
                </Text>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={[styles.pokeball, { height: height * 0.2 }]}
                    resizeMode="contain"
                />
                <FadeInImage
                    uri={picture}
                    style={{ ...styles.pokeImage, height: orientation === 'PORTRAIT' ? 250 : 125 }}
                />
            </View>
            {/* Detalles Y Loafing */}
            {
                isLoading ? (
                    <View style={styles.loadingIndicator} >
                        <ActivityIndicator
                            size="large"
                            color={color}
                        />
                    </View>
                ) : (
                    <PokemonDetails pokemon={pokemon} />
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: 370,
        zIndex: 999,
        elevation: 10,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: '#fff',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokeImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PokemonScreen;
