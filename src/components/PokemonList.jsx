/* eslint-disable react/prop-types */
import React from 'react';

const PokemonList = ({ datas }) => {
  return (
    <ul>
      {datas.map((pokemon, idx) => (
        <li key={idx}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
