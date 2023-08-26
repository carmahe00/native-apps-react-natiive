/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet, Text, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemoninterfaces';

import { styles } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';
import { RootStackParamList } from '../routes/Navigator';

interface Props {
    pokemon: SimplePokemon
}

type FlatListItemNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const PokemonCard = ({ pokemon }: Props) => {
    const isMounted = useRef(true);
    const { width } = useWindowDimensions();
    const [bgColor, setBgColor] = useState('grey');
    const navigation = useNavigation<FlatListItemNavigationProp>();
    useEffect(() => {
        (async () => {
            const result = await ImageColors.getColors(pokemon.picture, {
                fallback: 'gray',
            });
            if (!isMounted.current) { return; }
            let color: string | undefined = 'gray';
            switch (result.platform) {
                case 'android':
                    // android result properties
                    color = result.dominant;
                    break;
                case 'ios':
                    // iOS result properties
                    color = result.background;
                    break;
                default:
                    throw new Error('Unexpected platform key');
            }
            setBgColor(color!);

        })();
        return () => {
            isMounted.current = false;
        };
    }, []);
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Pokemon', { color: bgColor, simplePokemon: pokemon })}
        >
            <View style={[stylesPokeCard.cardContainer, { width: width * 0.45, marginHorizontal: width * 0.02, backgroundColor: bgColor }]} >
                <View>
                    <Text style={stylesPokeCard.name} >
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={styles.pokeContainer} >
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    );
};

const stylesPokeCard = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'grey',
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
});

export default PokemonCard;
