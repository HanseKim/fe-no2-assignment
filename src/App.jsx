import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Pokemon from './pages/Pokemon';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle /> {/* ✅ 전역 스타일 추가 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
