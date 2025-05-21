import { useState, useEffect } from 'react';
import React from 'react';
import logo from '../images/pokemon-logo.png';
import styled from 'styled-components';

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
  return (
    <Wrapper>
      <Image src={logo} alt="" />
      <Button onClick={() => {}}>포켓몬 도감 시작하기</Button>
    </Wrapper>
  );
};

export default Main;
