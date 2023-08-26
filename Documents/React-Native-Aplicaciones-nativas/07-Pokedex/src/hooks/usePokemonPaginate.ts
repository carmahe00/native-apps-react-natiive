/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokedexPaginationResponse, SimplePokemon, Result } from '../interfaces/pokemoninterfaces';

export const usePokemonPaginated = () => {
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useRef(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPage = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');
    const loadPokemons = async () => {
        if (!isMounted) { return; }
        setIsLoading(true);
        const { data } = await pokemonApi.get<PokedexPaginationResponse>(nextPage.current);
        if (data.next) {
            nextPage.current = data.next;
        }
        mapPokemonList(data.results);
    };
    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemon: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return { id, picture, name };
        });
        setSimplePokemonList([...simplePokemonList, ...newPokemon]);
        setIsLoading(false);
    };
    useEffect(() => {
        loadPokemons();
        return () => {
            isMounted.current = false;
        };
    }, []);
    return {
        simplePokemonList,
        isLoading,
        loadPokemons,
    };
};
