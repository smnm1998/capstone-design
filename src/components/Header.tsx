import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CategoryItemWrapper from './CategoryItemWrapper';
import DarkModeToggle from './DarkModeToggle';

const Category = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header: React.FC = () => {
    const isDarkMode = useSelector((state: any) => state.darkMode);

    return (
        <HeaderContainer>
            <Category>
                    <CategoryItemWrapper text="Logo" />
                    <CategoryItemWrapper text="Books" />
                    <CategoryItemWrapper text="Drama" />
                    <CategoryItemWrapper text="Movie" />
                    <CategoryItemWrapper text="Music" />

            </Category>
            <DarkModeToggle />
        </HeaderContainer>
    );
};

export default Header;
