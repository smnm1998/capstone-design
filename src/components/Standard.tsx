import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import RootState from '../modules/RootState'; // RootState 임포트 추가

const Wrapper = styled.div<{ isDarkMode: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 2px solid ${(props) => (props.isDarkMode ? '#fff' : '#000')};
    width: auto;
    height: 1500px;
    border-radius: 15px;
`;

const APIRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1400px;
    margin-bottom: 20px;
`;

const APIWrapper = styled.div<{ isDarkMode: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border: 1px solid ${(props) => (props.isDarkMode ? '#fff' : '#000')};
    width: 630px;
    height: 600px;
    text-align: center;
    border-radius: 5px;
`;

const APIWrapper2 = styled(APIWrapper) <{ isDarkMode: boolean }>`
    margin-right: 740px;
`;

const Standard: React.FC = () => {
    const isDarkMode = useSelector((state: RootState) => state.darkMode);
    return (
        <Wrapper isDarkMode={isDarkMode}>
            <APIRow>
                <APIWrapper isDarkMode={isDarkMode}>
                    <p>API 1</p>
                </APIWrapper>
                <APIWrapper isDarkMode={isDarkMode}>
                    <p>API 2</p>
                </APIWrapper>
            </APIRow>
            <APIWrapper2 isDarkMode={isDarkMode}>
                <p>API 3</p>
            </APIWrapper2>
        </Wrapper>
    );
}

export default Standard;
