import React from 'react';
import styled from 'styled-components';
import Spinner from '../assets/svg/Spinner.svg';
import SpinnerDark from '../assets/svg/Spinner_dark.svg'; // 다크모드용 Spinner
import { useSelector } from 'react-redux';
import RootState from '../modules/RootState';

const Background = styled.div<{ isDarkMode: boolean }>`
    position: fixed; /* 화면을 벗어나더라도 로딩 창이 고정되도록 설정 */
    top: 0;
    left: 0;
    width: 100%; /* 화면 전체 너비 */
    height: 100%; /* 화면 전체 높이 */
    background: ${({ isDarkMode }) => (isDarkMode ? '#333333' : '#f5f5f5')};
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* 로딩 창의 크기를 벗어나는 내용을 숨김 */
`;


const LoadingText = styled.div<{ isDarkMode: boolean }>`
    font: 1rem 'LINESeedKR-Bd';
    text-align: center;
    color: ${({ isDarkMode }) => (isDarkMode ? '#f5f5f5' : '#333333')};
`;

const Loading: React.FC = () => {
    const isDarkMode = useSelector((state: RootState) => state.darkMode);

    return (
        <Background isDarkMode={isDarkMode}>
            <LoadingText isDarkMode={isDarkMode}>
                Loading...
            </LoadingText>
            <img src={isDarkMode ? SpinnerDark : Spinner} alt="로딩 중" width="8%" />
        </Background>
    );
};

export default Loading;
