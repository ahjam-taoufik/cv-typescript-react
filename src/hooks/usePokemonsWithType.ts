import React, { useEffect, useState,FunctionComponent } from 'react'
import { POKEMONS } from '../models/mock-pokemon';
import Pokemon from '../models/pokemon';


const usePokemonsWithType  = (type?:string) => {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    
    useEffect(() => {
      setPokemon(POKEMONS);
    }, []);
    
   

    const pokemons1=pokemons.map(pokemon => pokemon)
                            .filter(pokemon => pokemon.types.includes(type?type:''));
    

  return pokemons1;
}

export default usePokemonsWithType
