import React from 'react';
import Mypokemon from '../components/Mypokemon';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Pokemon = () => {
  const location = useLocation();
  const pokemonData = location.state?.data || [];

  return (
    <Wrapper>
      <Mypokemon />
      <PokemonList pokemonData={pokemonData} />
    </Wrapper>
  );
};

export default Pokemon;
