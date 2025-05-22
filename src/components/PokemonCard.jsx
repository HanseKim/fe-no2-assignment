/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 10%;
  height: 220px;
  min-width: 150px;
  border: 1px lightgray solid;
  border-radius: 10px;
  margin: 10px;
  list-style: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease;

  &:hover {
    /* transform: scale(1.05); */
    transform: translateY(-7px);
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    /* border-color: red; */
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;
const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Number = styled.div`
  width: 100%;
  margin: 5px;
  font-size: small;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgray;
`;
const Button = styled.button`
  background-color: red;
  color: white;
  width: 40px;
  height: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #8b3939;
  }
`;

const PokemonCard = ({ pokemon, fun, del = false }) => {
  return (
    <ListItem>
      <Image src={pokemon.image} />
      <Name>{pokemon.name}</Name>
      <Number>No.{pokemon.id}</Number>
      <Button onClick={() => fun(pokemon)}>{del ? '제거' : '추가'}</Button>
    </ListItem>
  );
};

export default PokemonCard;
