/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { clearMessage } from '../features/pokemon/pokemonSlice';
import { useDispatch } from 'react-redux';

const Overlay = styled.div`
  position: fixed; // 전체 화면 덮도록
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // 어두운 배경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; // 다른 요소 위에
`;
const ModalBox = styled.div`
  background-color: white;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;
const CloseBtn = styled.button`
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: 3px solid gray;
  }
`;

const Modal = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <Overlay onClick={() => dispatch(clearMessage())}>
      <ModalBox
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p>{message || '모달'}</p>
        <CloseBtn
          onClick={() => {
            dispatch(clearMessage());
          }}
        >
          닫기
        </CloseBtn>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;
