import React, { useEffect, useState } from 'react'
import { POKEMONS } from '../models/mock-pokemon';
import Pokemon from '../models/pokemon';


const usePokemons  = () => {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    
    useEffect(() => {
      // setPokemon(POKEMONS);
      fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .then((pokemons) => {
        setPokemon(pokemons);
      }
      )

    }, []);
    

   


  return pokemons;
}

export default usePokemons
