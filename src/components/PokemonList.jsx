/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 98%;
`;
const ListWrap = styled.ul`
  background-color: #f1f1f1;
  border: 1px lightgray solid;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap; // 넘어가면 다음줄로 내리기
  justify-content: space-evenly;
  align-items: center;
`;
const ListItem = styled.li`
  background-color: white;
  width: 20%;
  height: 150px;
  min-width: 150px;
  border: 1px lightgray solid;
  border-radius: 10px;
  margin: 10px;
  list-style: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); // ← 그림자 추가
`;

const PokemonList = ({ pokemonData }) => {
  return (
    <Wrapper>
      <ListWrap>
        {pokemonData.map((pokemon, idx) => (
          <ListItem key={idx}>
            {pokemon.name} <img src={pokemon.image} />
          </ListItem>
        ))}
      </ListWrap>
    </Wrapper>
  );
};

export default PokemonList;
