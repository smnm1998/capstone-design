import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Books from './routes/Books';
import Drama from './routes/Drama';
import Movie from './routes/Movie';
import Music from './routes/Music';
import Intro from './routes/Intro'; // Intro 컴포넌트를 import합니다.
import ToggleSwitch from './components/ToggleSwitch'; // ToggleSwitch 컴포넌트를 import합니다.

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

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 로컬 스토리지에서 다크 모드 설정 불러오기
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    // 상태 값 변경 시 로컬 스토리지에 저장
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <HeaderContainer>
          <ToggleSwitch isChecked={isDarkMode} onChange={toggleDarkMode} />
        </HeaderContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/books" element={<Books />} />
            <Route path="/drama" element={<Drama />} />
            <Route path="/music" element={<Music />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
