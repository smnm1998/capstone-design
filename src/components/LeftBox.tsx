import React from 'react';
import styled from 'styled-components';

const LeftBoxContainer = styled.div`
    background-color: lightblue;
    padding: 20px;
    border-radius: 5px;
`;

const LeftBoxContent = styled.div`
    color: black;
    font-size: 18px;
`;

const LeftBox = () => {
    return (
        <LeftBoxContainer>
            <LeftBoxContent>
                This is the content of the left box.
            </LeftBoxContent>
            <LeftBoxContent>
                This is the content of the left box.
            </LeftBoxContent>
        </LeftBoxContainer>
    );
};

export default LeftBox;