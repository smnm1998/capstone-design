import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../assets/svg/logo.svg';
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
`;

function Mainpage() {
    return (
        <Router> {/* BrowserRouter로 감싸기 */}
            <Container>
                <div>
                    <Link to="/">
                        <LogoImg src={Logo} alt="logo" />
                    </Link>
                </div>
                <Webcam />
            </Container>
        </Router>
    );
}

export default Mainpage;
