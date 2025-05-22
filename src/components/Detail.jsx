/* eslint-disable react/prop-types */
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

// {id: 1,
//   name: "이상해씨",
//    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     types: ["풀", "독"],
//     description: "풀과 독 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다."}

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const pokemonData = location.state?.data || [];
  const navigate = useNavigate();

  return (
    <div>
      <img src={pokemonData.image} alt="" />
      <p>{pokemonData.name}</p>
      <p>{pokemonData.description}</p>
      <button onClick={() => navigate('/pokemon')}>뒤로가기</button>
    </div>
  );
};

export default Detail;
