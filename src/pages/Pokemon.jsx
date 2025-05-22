import React, { useState } from 'react';
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
  const [pokeList, setPokeList] = useState([0, 0, 0, 0, 0, 0]);

  const addPokemon = (pokemon) => {
    if (pokeList[5] != 0) {
      alert('이미 6개까지 추가됐습니다');
      return;
    }
    //[].some() : 배열에 조건을 만족하는게 하나라도 있으면 true
    if (pokeList.some((p) => p !== 0 && p.id === pokemon.id)) {
      alert('이미 추가되어있습니다 !');
      return;
    }

    const emptyIndex = pokeList.findIndex((p) => p === 0);
    if (emptyIndex === -1) return;

    const newList = [...pokeList];
    newList[emptyIndex] = pokemon;
    setPokeList(newList);
  };

  // 이상함..
  // const deletePokemon = (pokemon) => {
  //   console.log('Minus');
  //   if (pokeList.some((p) => p !== 0 && p.id === pokemon.id)) {
  //     alert('이미 추가되어있습니다 !');
  //     const deleteId = pokeList.findIndex((p) => p === pokemon.id);
  //     const newList = pokeList.filter(id === deleteId);
  //     setPokeList(newList);
  //     return;
  //   }
  // };

  // 앞에 포켓몬 지원도 안땡겨짐
  // const deletePokemon = (pokemon) => {
  //   const deleteIndex = pokeList.findIndex(
  //     (p) => p !== 0 && p.id === pokemon.id
  //   );

  //   if (deleteIndex !== -1) {
  //     const newList = [...pokeList];
  //     newList[deleteIndex] = 0; // 0으로 초기화
  //     setPokeList(newList);
  //   }
  // };

  // 포문으로
  // const deletePokemon = (pokemon) => {
  //   const deleteIndex = pokeList.findIndex(
  //     (p) => p !== 0 && p.id === pokemon.id
  //   );

  //   if (deleteIndex !== -1) {
  //     const newList = [...pokeList];

  //     // 앞으로 한 칸씩 땡기기
  //     for (let i = deleteIndex; i < newList.length - 1; i++) {
  //       newList[i] = newList[i + 1];
  //     }

  //     // 마지막 칸 0으로 초기화
  //     newList[newList.length - 1] = 0;

  //     setPokeList(newList);
  //   }
  // };
  const deletePokemon = (pokemon) => {
    // 0이 아닌 포켓몬 중 삭제 대상이 아닌 것만 남김
    const filtered = pokeList.filter((p) => p !== 0 && p.id !== pokemon.id);

    // 뒤를 0으로 채워서 길이 6 유지
    const newList = [...filtered, ...Array(6 - filtered.length).fill(0)];

    setPokeList(newList);
  };

  return (
    <Wrapper>
      <Mypokemon pokeList={pokeList} deletePokemon={deletePokemon} />
      <PokemonList pokemonData={pokemonData} addPokemon={addPokemon} />
    </Wrapper>
  );
};

export default Pokemon;
