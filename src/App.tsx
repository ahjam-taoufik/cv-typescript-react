import React, { FunctionComponent,useEffect,useState } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
  
const App: FunctionComponent = () => {
  const [pokemons,setPokemon] =useState<Pokemon[]>([]);
    


useEffect(() => {
      setPokemon(POKEMONS);
},[])


 return (
  <h1>{pokemons.length} </h1>
 )
}
  
export default App;
