import React, { FunctionComponent } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonsDetail from './pages/Pokemon-detail';
import PokemonList from './pages/Pokemon-list';
import PokemonEdit from './pages/Pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/Login';
import PrivateRoute from './components/Privateroute';


const App: FunctionComponent = () => {


  return (
    <BrowserRouter>
       <nav>
          <div className="nav-wrapper teal" >
              <Link to="/" className="brand-logo center">Pokemon</Link>
          </div>
       </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><PokemonList/></PrivateRoute>} />
            <Route path="/pokemon" element={<PrivateRoute><PokemonList /></PrivateRoute>} />
            <Route path="/pokemon/add" element={<PrivateRoute><PokemonAdd /></PrivateRoute>} />
            <Route path="/pokemon/:id" element={<PrivateRoute><PokemonsDetail /></PrivateRoute>} />
            <Route path="/pokemon/:id/edit" element={<PrivateRoute><PokemonEdit /></PrivateRoute>} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>

       
   
    </BrowserRouter>  
  );
};

export default App;
