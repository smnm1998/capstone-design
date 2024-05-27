import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Standard from '../components/Standard';

const Container = styled.div`
  padding: 20px 150px; /* 패딩을 퍼센트 단위로 */

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Books: React.FC = () => {
  return (
    <Container>
      <Header />
      <Standard />
    </Container>
  );
};

export default Books;
