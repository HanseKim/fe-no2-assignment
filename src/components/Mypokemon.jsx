import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 150px;
  width: 95%;
  border-radius: 10px;
  background-color: #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: red;
  font-size: 30px;
`;
const ListWrap = styled.div``;
const Mypokemon = () => {
  return (
    <Wrapper>
      <Title>나만의 포켓몬</Title>
      <ListWrap />
    </Wrapper>
  );
};

export default Mypokemon;
