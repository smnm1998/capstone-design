import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DarkModeToggle from '../components/DarkModeToggle';
import Logo from '../assets/svg/logo.svg';
import LogoWhite from '../assets/svg/logo_white.svg';
import Webcam from '../components/Webcam';

// 전체를 감싸는 div
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

// 로고
const LogoImg = styled.img`
  width: 200px; // 너비
  margin-bottom: 60px; // 여백
  cursor: pointer; // 클릭 가능한 커서
`;

const DarkModeContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

function Mainpage() {
  const isDarkMode = useSelector((state: any) => state.darkMode);
  const [webcamKey, setWebcamKey] = useState(Date.now()); // 웹캠 초기화를 위한 키

  // 로고 클릭 시 웹캠 초기화 함수
  const handleLogoClick = () => {
    setWebcamKey(Date.now()); // 키를 변경하여 웹캠 초기화
  };

  return (
    <Container>
      {/* Link 컴포넌트를 사용하여 로고를 클릭할 때 페이지 이동을 막음 */}
      <Link to="/" onClick={handleLogoClick}>
        <LogoImg src={isDarkMode ? LogoWhite : Logo} alt="logo" />
      </Link>
      <Webcam key={webcamKey} /> {/* 키를 props로 전달하여 웹캠 초기화 */}
      <DarkModeContainer>
        <DarkModeToggle />
      </DarkModeContainer>
    </Container>
  );
}

export default Mainpage;
