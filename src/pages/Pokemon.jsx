import React from 'react';
import Mypokemon from '../components/Mypokemon';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Pokemon = () => {
  return (
    <Wrapper>
      <Mypokemon />
      <PokemonList />
    </Wrapper>
  );
};

export default Pokemon;
