import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import logo from '../images/pokemon-logo.png';
import styled from 'styled-components';
import instance from '../api/api';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Image = styled.img`
  width: 500px;
  height: 250px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: red;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
`;

const Main = () => {
  const navigate = useNavigate();
  const getPokemon = async () => {
    const res = await instance.get('/pokemon?limit=150&offset=0');
    const pokemonData = res.data.results;
    // 이렇게 하면 Promise 배열로 들어가기 때문에 번거로움
    // const Detail = await pokemonData.map(async (pokemon) => {
    //   const detail = await axios.get(pokemon.url);
    //   // console.log(detail.data.sprites.front_default);
    //   return {
    //     name: pokemon.name,
    //     image: detail.data.sprites.front_default,
    //   };
    // });
    const Detail = await Promise.all(
      pokemonData.map(async (pokemon) => {
        const detail = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          image: detail.data.sprites.front_default,
        };
      })
    );

    console.log(Detail);
    navigate('/pokemon', { state: { data: Detail } });
  };

  return (
    <Wrapper>
      <Image src={logo} alt="Pokemon logo" />
      <Button onClick={getPokemon}>포켓몬 도감 시작하기</Button>
    </Wrapper>
  );
};

export default Main;
