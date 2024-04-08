import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ToggleSwitch from '../components/ToggleSwitch';
import Information from '../components/Moviedrama/Information';
import Author from '../components/Moviedrama/Author';
import Reaction from '../components/Moviedrama/Reaction';

const lightTheme = {
  body: '#ffffff',
  text: '#000000',
  border: '#000000',
};

const darkTheme = {
  body: '#1e1e1e',
  text: '#ffffff',
  border: '#ffffff', // 다크모드일 때 테두리 색상을 흰색으로 지정
};

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  padding: 10px 150px; /* 여백을 10px로 수정 */
`;


const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
`;

const Movie = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <HeaderContainer>
          <Header isDarkMode={isDarkMode} />
          <ToggleSwitch isChecked={isDarkMode} onChange={toggleDarkMode} />
        </HeaderContainer>
        <Routes>
          <Route path="*" element={<Moviedrama />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
};

const Moviedrama = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        display: 'grid',
        gridTemplateColumns:
          windowWidth < 600
            ? `repeat(auto-fit, minmax(100px, 1fr))`
            : 'repeat(2, 1fr)',
        gap: '40px',
      }}
    >
      <Information />
      <Author />
      <Reaction />
    </div>
  );
};

export default Movie;
