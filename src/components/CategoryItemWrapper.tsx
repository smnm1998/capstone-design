import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/svg/logo.svg';
import logoWhite from '../assets/svg/logo_white.svg';
import bookSparkles from '../assets/svg/book.svg';
import clapperboard from '../assets/svg/clapperboard.svg';
import filmAlt from '../assets/svg/film.svg';
import music from '../assets/svg/music.svg';
import bookWhite from '../assets/svg/book_white.svg';
import clapperWhite from '../assets/svg/clapperboard_white.svg';
import filmWhite from '../assets/svg/film_white.svg';
import musicWhite from '../assets/svg/music_white.svg';

const CategoryItem = styled.div`
    position: relative;
`;

const CategoryLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    margin: 20px;
    transition: all 0.3s ease;
    flex-basis: calc(25% - 60px);
    max-width: calc(25% - 60px);
    text-align: center;
    background-size: contain;
    background-position: center;
    height: 60px;
    width: 60px;
    cursor: pointer;
`;

const Text = styled.div`
    position: absolute;
    bottom: 80%;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

const MusicText = styled(Text)`
    left: calc(50% + 5px);
`;

const Logo = styled.img`
    position: absolute;
    top: -10px;
    left: -10px;
    width: 120px;
    height: 110px;
`;

interface CategoryItemWrapperProps {
    text: string;
}

const CategoryItemWrapper: React.FC<CategoryItemWrapperProps> = ({ text }) => {
    const [showText, setShowText] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const isDarkMode = useSelector((state: any) => state.darkMode);

    useEffect(() => {
        setLoading(false);
    }, [isDarkMode]);

    if (loading) return null;

    return (
        <CategoryItem
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
        >
            {text === 'Logo' ? (
                <CategoryLink to="/">
                    <Logo src={isDarkMode ? logoWhite : logo} alt="Logo" />
                </CategoryLink>
            ) : (
                <CategoryLink to={`/${text.toLowerCase()}`}>
                    {text === 'Books' && (
                        <img src={isDarkMode ? bookWhite : bookSparkles} alt="Books" width="60" height="60" />
                    )}
                    {text === 'Drama' && (
                        <img src={isDarkMode ? clapperWhite : clapperboard} alt="Drama" width="60" height="60" />
                    )}
                    {text === 'Movie' && (
                        <img src={isDarkMode ? filmWhite : filmAlt} alt="Movie" width="60" height="60" />
                    )}
                    {text === 'Music' && (
                        <img src={isDarkMode ? musicWhite : music} alt="Music" width="60" height="60" />
                    )}
                </CategoryLink>
            )}
            {text === 'Logo' ? (
                null
            ) : (
                text === 'Music' ? (
                    <MusicText style={{ opacity: showText ? 1 : 0 }}>{text}</MusicText>
                ) : (
                    <Text style={{ opacity: showText ? 1 : 0 }}>{text}</Text>
                )
            )}
        </CategoryItem>
    );
};

export default CategoryItemWrapper;
