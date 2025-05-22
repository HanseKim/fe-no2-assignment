import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../images/pokemon-logo.png';
import styled from 'styled-components';
import MOCK_DATA from '../mock';
import { useDispatch } from 'react-redux';
import { setPokemon } from '../features/pokemon/pokemonSlice';

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

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getPokemon = () => {
    const Detail = MOCK_DATA.map((p) => ({
      id: p.id,
      name: p.korean_name,
      image: p.img_url,
      types: p.types,
      description: p.description,
    }));

    dispatch(setPokemon(Detail));
    localStorage.setItem('pokemon', JSON.stringify(Detail));
    navigate('/pokemon');
  };

  return (
    <Wrapper>
      <Image src={logo} alt="Pokemon logo" />
      <Button onClick={getPokemon}>포켓몬 도감 시작하기</Button>
    </Wrapper>
  );
};

export default Home;
