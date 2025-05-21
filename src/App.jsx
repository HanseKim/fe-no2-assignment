import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
