/* eslint-disable react/prop-types */
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

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
  background-color: lightgray;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    border: 2px solid lightblue;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const pokemonData = location.state?.data || [];
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Img src={pokemonData.image} alt="" />
      <Name>{pokemonData.name}</Name>
      <p>{pokemonData.description}</p>
      <Button onClick={() => navigate('/pokemon')}>뒤로가기</Button>
    </Wrapper>
  );
};

export default Detail;
