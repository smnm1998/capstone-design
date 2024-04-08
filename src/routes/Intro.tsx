import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/capstone_logo.svg';
import Webcam from '../components/Webcam'; // Webcam 컴포넌트 import

// 전체를 감싸는 div에 스타일 적용
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

// 로고 이미지 스타일링
const LogoImage = styled.img`
  width: 200px; /* 원하는 너비로 설정 */
  margin-bottom: 60px; /* 원하는 여백 크기로 설정 */
`;


export default function Intro() {
  return (
    <Container>
      <div>
        <Link to="/">
          <LogoImage src={Logo} alt="Capstone_logo" />
        </Link>
      </div>
      <Webcam />
    </Container>
  );
}
