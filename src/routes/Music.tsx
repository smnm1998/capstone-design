import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ToggleSwitch from '../components/ToggleSwitch';
import Information from '../components/Music/Information';
import Author from '../components/Music/Singer';
import Reaction from '../components/Music/Reaction';

const lightTheme = {
  body: '#ffffff',
  text: '#000000',
  border: '#000000',
};

const darkTheme = {
  body: '#1e1e1e',
  text: '#ffffff',
  border: '#ffffff',
};

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  padding: 10px 150px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
`;

const Music = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          <Route path="*" element={<MusicContent />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
};

const MusicContent = () => {
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

export default Music;
