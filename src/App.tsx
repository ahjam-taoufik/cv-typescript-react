import React, { FunctionComponent, useEffect, useState } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: FunctionComponent = () => {
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    setPokemon(POKEMONS);
  }, []);

  return (
    <div>
      <h1>Pokémons</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <div className="col s6 m4" key={pokemon.id}>
              <div className="card horizontal">
                <div className="card-image">
                  <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{pokemon.name}</p>
                    <p>
                      <small>{pokemon.created.toString()}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
