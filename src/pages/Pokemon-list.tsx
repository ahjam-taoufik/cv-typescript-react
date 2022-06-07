import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PokemonItem } from '../components/Pokemon-item';
import usePokemons from '../hooks/usePokemons';


const PokemonList= () => {
    //  const pokemons=usePokemonsWithType('Feu');
     const pokemons=usePokemons();
   

  return (
    <>
    { pokemons &&
     <div>
      <h1 className="center">Pokémons</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} borderColor={'red'} />
            ))}
        </div>
      </div>
      </div>
      
    }
    <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{position: 'fixed', bottom: '25px', right: '25px'}}
        to="/pokemon/add">
        <i className="material-icons">add</i>
      </Link>
      </>
  );
};

export default PokemonList;
