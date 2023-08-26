import React from 'react';
import { Image, FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginate';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <View style={stylesHome.container} >
                <FlatList
                    ListHeaderComponent={(
                        <Text
                            style={[styles.globalMargin, styles.title, { top }]}
                        >
                            Pokedex
                        </Text>
                    )}
                    data={simplePokemonList}
                    keyExtractor={pokemon => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={<ActivityIndicator size="large" color="gray" />}
                />
            </View>
        </>
    );
};
export default HomeScreen;

const stylesHome = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
