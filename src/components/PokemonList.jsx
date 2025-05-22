/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
// import PokemonContext from '../context/context';
import { useSelector, useDispatch } from 'react-redux';
import { setPokemon } from '../features/pokemon/pokemonSlice';
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

const PokemonList = ({ addPokemon }) => {
  // const { pokemon, setPokemon } = useContext(PokemonContext);
  const pokemon = useSelector((state) => state.pokemon.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!pokemon || pokemon.length === 0) {
      const saved = localStorage.getItem('pokemon');
      if (saved) {
        dispatch(setPokemon(JSON.parse(saved)));
      }
    }
  }, [dispatch, pokemon]);

  return (
    <Wrapper>
      <ListWrap>
        {pokemon.map((pokemon, idx) => (
          <Pokemon key={idx} pokemon={pokemon} fun={addPokemon} />
        ))}
      </ListWrap>
    </Wrapper>
  );
};

export default PokemonList;
