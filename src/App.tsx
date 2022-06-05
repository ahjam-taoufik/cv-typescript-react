import React, { useState } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
  
const App: React.FC = () => {
  const [pokemons] =useState<Pokemon[]>(POKEMONS);
    
 return (
  <h1>{pokemons.length} </h1>
 )
}
  
export default App;
