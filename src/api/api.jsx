import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

// 인자 두개로 함수 두개를 받는다.
// 인자 1 => 성공했을 때,
// 인자 2 => 실패했을 때
instance.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행
    console.log('인터셉트 요청 성공!');
    return config;
  },
  function (error) {
    // 오류 요청을 보내기 전 수행
    console.log('인터셉트 요청 오류!');
    return Promise.reject(error);
  }
);

// 얘도 인자 두개로 함수 두개. 얜 응답 받을 때
instance.interceptors.response.use(
  function (response) {
    console.log('인터셉트 응답 받았어요!');
    // 정상 응답
    return response;
  },
  function (error) {
    console.log('인터셉트 응답 못받았어요...ㅠㅠ');
    return Promise.reject(error);
  }
);

export default instance;
