/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import ball from '../images/pokeball.png';
import PokemonCard from './PokemonCard';

const Wrapper = styled.div`
  height: 200px;
  width: 98%;
  border-radius: 10px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Title = styled.div`
  color: red;
  font-size: 20px;
`;
const ListWrap = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 5px;
  margin: 5px;
`;
const List = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 2px;
  border-color: lightgray;
  border-radius: 20px;
  width: 80px;
  min-width: 80px;
  height: 80px;
  padding: 7px;
`;
const ListItem = styled.img`
  width: 70%;
  height: 70%;
`;
const Mypokemon = ({ pokeList, deletePokemon }) => {
  return (
    <Wrapper>
      <Title>나만의 포켓몬</Title>
      <ListWrap>
        {pokeList.map((poke, index) => {
          if (poke === 0) {
            return (
              <List key={index}>
                <ListItem src={ball} alt="빈 포켓볼" />
              </List>
            );
          } else {
            return (
              <List key={index}>
                <PokemonCard pokemon={poke} fun={deletePokemon} />
              </List>
            );
          }
        })}
      </ListWrap>
    </Wrapper>
  );
};

export default Mypokemon;
