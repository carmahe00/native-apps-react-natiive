import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    pokebolaBG: {
        position: 'absolute',
        width: 300,
        height: 300,
        right: -100,
        top: -100,
        opacity: 0.3,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    pokeContainer: {
        height: 60,
        width: 90,
        bottom: 0,
        right: 0,
        position: 'absolute',
        overflow: 'hidden',
    },
    pokebola: {
        width: 100,
        height: 100,
        opacity: 0.4,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -5,
        bottom: -5,
    },
});
