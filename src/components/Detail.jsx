/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToPokeList } from '../features/pokemon/pokemonSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
`;
const Name = styled.p`
  font-size: x-large;
  color: red;
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  background-color: #f1f1f1;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    border: 2px solid lightskyblue;
  }
`;
const PlusBtn = styled.button`
  background-color: red;
  color: white;
  margin-top: 10px;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #8b3939;
  }
`;

const Detail = () => {
  const location = useLocation();
  const pokemonData = location.state?.data || [];
  const del = location.state?.del || false;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Img src={pokemonData.image} alt="" />
      <Name>{pokemonData.name}</Name>
      <p>{pokemonData.description}</p>
      <Button onClick={() => navigate('/pokemon')}>뒤로가기</Button>
      {del ? (
        <></>
      ) : (
        <PlusBtn
          onClick={() => {
            dispatch(addToPokeList(pokemonData));
            navigate('/pokemon');
          }}
        >
          추가
        </PlusBtn>
      )}
    </Wrapper>
  );
};

export default Detail;
