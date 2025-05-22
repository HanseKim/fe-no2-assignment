import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPokeList } from '../features/pokemon/pokemonSlice';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dex = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon.pokemon);
  const pokeList = useSelector((state) => state.pokemon.pokeList);

  const addPokemon = (pokemon) => {
    if (pokeList[5] !== 0) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }

    if (pokeList.some((p) => p !== 0 && p.id === pokemon.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }

    const emptyIndex = pokeList.findIndex((p) => p === 0);
    if (emptyIndex === -1) return;

    const newList = [...pokeList];
    newList[emptyIndex] = pokemon;
    dispatch(setPokeList(newList));
  };

  const deletePokemon = (pokemon) => {
    const filtered = pokeList.filter((p) => p !== 0 && p.id !== pokemon.id);
    const newList = [...filtered, ...Array(6 - filtered.length).fill(0)];
    dispatch(setPokeList(newList));
  };

  return (
    <Wrapper>
      <Dashboard pokeList={pokeList} deletePokemon={deletePokemon} />
      <PokemonList pokemonData={pokemon} addPokemon={addPokemon} />
    </Wrapper>
  );
};

export default Dex;
