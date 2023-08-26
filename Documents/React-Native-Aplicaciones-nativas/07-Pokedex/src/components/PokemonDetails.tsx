import React from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemoninterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}

const PokemonDetails = ({ pokemon }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <ScrollView style={[StyleSheet.absoluteFill]} showsVerticalScrollIndicator={false} >
            <View
                style={[styles.container, { marginTop: height * 0.5 }]}
            >
                <Text style={styles.title} >Types</Text>
                <View
                    style={{ flexDirection: 'row' }}
                >
                    {
                        pokemon.types.map(({ type }) => (
                            <Text style={[styles.regularText, { marginRight: 10 }]} key={type.name} >{type.name}</Text>
                        ))
                    }
                </View>
                <Text style={styles.title} >Weight</Text>
                <Text style={styles.regularText} >{pokemon.weight}kg</Text>
            </View>
            <View style={[styles.container]} >
                <Text style={styles.title} >Sprites</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>
            <View
                style={[styles.container]}
            >
                <Text style={styles.title} >Basic Abilities</Text>
                <View
                    style={{ flexDirection: 'row' }}
                >
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text style={[styles.regularText, { marginRight: 10 }]} key={ability.name} >{ability.name}</Text>
                        ))
                    }
                </View>
            </View>
            <View
                style={[styles.container]}
            >
                <Text style={styles.title} >Moves</Text>
                <View
                    style={{ flexDirection: 'row', flexWrap: 'wrap' }}
                >
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text style={[styles.regularText, { marginRight: 10 }]} key={move.name} >{move.name}</Text>
                        ))
                    }
                </View>
            </View>
            <View
                style={[styles.container]}
            >
                <Text style={styles.title} >Stats</Text>
                <View>
                    {
                        pokemon.stats.map(({ stat, base_stat }, i) => (
                            <View key={stat.name + i}
                                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                            >
                                <Text style={[styles.regularText]}>{stat.name}</Text>
                                <Text style={[styles.regularText, { fontWeight: 'bold' }]}>{base_stat}</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.bottom} >
                    <FadeInImage
                        uri={pokemon.sprites.other?.home.front_default!}
                        style={styles.basicSprite}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,
    },
    basicSprite: {
        width: 100,
        height: 100,
    },
    bottom: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PokemonDetails;
