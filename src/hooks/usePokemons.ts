import { useEffect, useState } from 'react'
import Pokemon from '../models/pokemon';
import PokemonService from './../services/pokemon-service';


const usePokemons  = () => {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    
    useEffect(() => {
      PokemonService.getPokemons().then(pokemons => {
        setPokemon(pokemons);
      });

    }, []);
    

   


  return pokemons;
}

export default usePokemons
