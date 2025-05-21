/* eslint-disable react/prop-types */
import React from 'react';

const PokemonList = ({ pokemonData }) => {
  return (
    <ul>
      {pokemonData.map((pokemon, idx) => (
        <li key={idx}>
          {pokemon.name} <img src={pokemon.image} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
