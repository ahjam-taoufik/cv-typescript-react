import React, { FunctionComponent, useEffect, useState } from 'react';
import { PokemonItem } from '../components/Pokemon-item';
import Pokemon from '../models/pokemon';
import { POKEMONS } from './../models/mock-pokemon';
const PokemonList: FunctionComponent= () => {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    useEffect(() => {
      setPokemon(POKEMONS);
    }, []);
  return (
    <> 
      <h1 className="center">Pokémons</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} borderColor={'red'} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
