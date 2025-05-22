/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Pokemon from './PokemonCard';

const Wrapper = styled.div`
  width: 98%;
`;
const ListWrap = styled.ul`
  background-color: #f1f1f1;
  border: 1px lightgray solid;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap; // 넘어가면 다음줄로 내리기
  justify-content: space-around;
  align-items: center;
`;

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <Wrapper>
      <ListWrap>
        {pokemonData.map((pokemon, idx) => (
          <Pokemon key={idx} pokemon={pokemon} fun={addPokemon} />
        ))}
      </ListWrap>
    </Wrapper>
  );
};

export default PokemonList;
