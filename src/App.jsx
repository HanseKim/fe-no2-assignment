import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dex from './pages/Dex';
import GlobalStyle from './GlobalStyle';
import Detail from './components/Detail';
import PokemonContext from './context/context';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeList, setPokeList] = useState([0, 0, 0, 0, 0, 0]);
  return (
    <PokemonContext.Provider
      value={{ pokemon, setPokemon, pokeList, setPokeList }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Dex />} />
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  );
}

export default App;
