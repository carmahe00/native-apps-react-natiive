/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { PokemonFull } from '../interfaces/pokemoninterfaces';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemon = (id: string) => {
    const isMounted = useRef(true);
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

    const loadPokemon = async () => {
        if (!isMounted) { return; }
        const { data } = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(data);
        setIsLoading(false);
    };

    useEffect(() => {
        loadPokemon();
        return () => {
            isMounted.current = false;
        };
    }, []);

    return {
        isLoading,
        pokemon,
    };
};
