/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, useWindowDimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemoninterfaces';

const SearchScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
    const [term, setTerm] = useState('');
    const { width } = useWindowDimensions();
    useEffect(() => {
        if (term.length === 0) {
            return setPokemonFiltered([]);
        }
        if (isNaN(Number(term))) { // Si no es número
            setPokemonFiltered(
                simplePokemonList.filter(poke => poke.name.toLocaleLowerCase().includes(term))
            );
        } else {
            const pokemonById = simplePokemonList.find(poke => poke.id === term);
            setPokemonFiltered(
                pokemonById ? [pokemonById] : []
            );
        }

    }, [term]);
    if (isFetching) {
        <Loading />;
    }
    return (
        <View style={[stylesSearch.container]} >
            <SearchInput
                style={[stylesSearch.styleSearch, { width: width - 40, top: Platform.OS === 'ios' ? top : top + 10 }]}
                onDebounced={setTerm}
            />
            <FlatList
                ListHeaderComponent={(
                    <Text
                        style={[styles.globalMargin, styles.title, { marginTop: top + 50 }]}
                    >
                        {term}
                    </Text>
                )}
                data={pokemonFiltered}
                keyExtractor={pokemon => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
            />
        </View>
    );
};

const stylesSearch = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
    },
    styleSearch: {
        position: 'absolute',
        zIndex: 999,
        right: 5,
        marginHorizontal: 5,
    },
});

export default SearchScreen;
