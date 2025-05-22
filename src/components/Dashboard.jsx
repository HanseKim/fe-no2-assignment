/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import PokemonContext from '../context/context';
import styled from 'styled-components';
import ball from '../images/pokeball.png';
import PokemonCard from './PokemonCard';

const Wrapper = styled.div`
  width: 98%;
  border-radius: 10px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  min-height: 200px;
  height: auto;
`;
const Title = styled.div`
  color: red;
  font-size: 20px;
`;
const ListWrap = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  padding: 20px 0;
  min-height: 100px;
  height: auto;
`;
const List = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 2px lightgray;
  border-radius: 20px;
  padding: 7px;
  height: 80px;
  width: 80px;
`;
const ListItem = styled.img`
  width: 70%;
  height: 70%;
`;

const Dashboard = ({ deletePokemon }) => {
  const { pokeList } = useContext(PokemonContext);
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
              <PokemonCard
                key={index}
                pokemon={poke}
                fun={deletePokemon}
                del={true}
              />
            );
          }
        })}
      </ListWrap>
    </Wrapper>
  );
};

export default Dashboard;
