// DarkModeToggle.tsx 파일
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleDarkMode } from '../modules/Actions';
import RootState from '../modules/RootState'; // 수정된 부분

const ToggleSwitchWrapper = styled.label`
  display: inline-block;
  position: relative;
  width: 4.2em;
  height: 2em;
`;

const ToggleSwitchInput = styled.input`
  display: none;
`;

const ToggleSwitchButton = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: lightgray;
  border-radius: 2em;
  transition: background-color 0.4s ease;

  &:after {
    content: '🌚';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    background-color: white;
    border-radius: 50%;
    transition: all 0.4s ease;
  }

  ${ToggleSwitchInput}:checked + & {
    background-color: gray;

    &:after {
      content: '🌞';
      left: 50%;
    }
  }
`;

const ToggleSwitch: React.FC<{ isChecked: boolean; onChange: () => void }> = ({
  isChecked,
  onChange,
}) => {
  return (
    <ToggleSwitchWrapper>
      <ToggleSwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <ToggleSwitchButton />
    </ToggleSwitchWrapper>
  );
};

const DarkModeToggle: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode); // 수정된 부분
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      dispatch(toggleDarkMode());
    }
  }, []);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
    localStorage.setItem('darkMode', !darkMode ? 'true' : 'false');
  };

  return <ToggleSwitch isChecked={darkMode} onChange={handleToggle} />;
};

export default DarkModeToggle;
