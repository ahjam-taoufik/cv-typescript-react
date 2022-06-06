import React, { FunctionComponent, useEffect, useState } from 'react';
import { PokemonItem } from '../components/Pokemon-item';
import usePokemons from '../hooks/usePokemons';
import usePokemonsWithType from '../hooks/usePokemonsWithType';
import Pokemon from '../models/pokemon';
import { POKEMONS } from './../models/mock-pokemon';



const PokemonList= () => {
    //  const pokemons=usePokemonsWithType('Feu');
     const pokemons=usePokemons();
   


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
