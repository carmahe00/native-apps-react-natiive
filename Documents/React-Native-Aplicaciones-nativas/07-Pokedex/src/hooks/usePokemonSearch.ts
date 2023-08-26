/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokedexPaginationResponse, SimplePokemon, Result } from '../interfaces/pokemoninterfaces';

export const usePokemonSearch = () => {
    const [isFetching, setIsFetching] = useState(true);
    const isMounted = useRef(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const loadPokemons = async () => {
        if (!isMounted) { return; }
        const { data } = await pokemonApi.get<PokedexPaginationResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        mapPokemonList(data.results);
    };
    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemon: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return { id, picture, name };
        });
        setSimplePokemonList(newPokemon);
        setIsFetching(false);
    };
    useEffect(() => {
        loadPokemons();
        return () => {
            isMounted.current = false;
        };
    }, []);
    return {
        simplePokemonList,
        isFetching,
    };
};
