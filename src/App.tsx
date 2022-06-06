import React, { FunctionComponent } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonsDetail from './pages/Pokemon-detail';
import PokemonList from './pages/Pokemon-list';


const App: FunctionComponent = () => {


  return (
    <BrowserRouter>
       <nav>
          <div className="nav-wrapper teal" >
              <Link to="/" className="brand-logo center">Pokemon</Link>
          </div>
       </nav>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonsDetail />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>

       
   
    </BrowserRouter>  
  );
};

export default App;
