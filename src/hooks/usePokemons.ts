import React, { useEffect, useState } from 'react'
import { POKEMONS } from '../models/mock-pokemon';
import Pokemon from '../models/pokemon';


const usePokemons = () => {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    useEffect(() => {
      setPokemon(POKEMONS);
    }, []);

  return pokemons;
}

export default usePokemons