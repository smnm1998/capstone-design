import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
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
  border: '#ffffff',
};

const Container = styled.div`
  padding: 10px 150px;
`;

const Books = ({ isDarkMode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Header />
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <div
          style={{
            padding: '20px',
            backgroundColor: isDarkMode ? darkTheme.body : lightTheme.body,
            color: isDarkMode ? darkTheme.text : lightTheme.text,
            transition: 'background-color 0.3s ease, color 0.3s ease',
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
      </ThemeProvider>
    </Container>
  );
};

export default Books;
