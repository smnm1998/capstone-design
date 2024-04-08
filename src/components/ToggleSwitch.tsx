import React from 'react';
import styled from 'styled-components';

interface ToggleSwitchProps {
    isChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitchWrapper = styled.label`
    display: inline-block;
    position: relative;
    width: 4.2em; /* 토글 스위치의 너비 조정 */
    height: 2em; /* 토글 스위치의 높이 조정 */
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
    border-radius: 2em; /* 토글 스위치 버튼의 둥근 모양을 위한 반지름 설정 */
    transition: background-color 0.4s ease;
    
    &:after {
        content: "🌝";
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
        content: "🌞";
        left: 50%;
        }
    }
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked, onChange }) => {
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

export default ToggleSwitch;
