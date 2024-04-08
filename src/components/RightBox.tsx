import React from 'react';
import styled from 'styled-components';

const RightBoxContainer = styled.div`
    background-color: lightgreen;
    padding: 20px;
    border-radius: 5px;
`;

const RightBoxContent = styled.div`
    color: black;
    font-size: 18px;
`;

const RightBox = () => {
    return (
        <RightBoxContainer>
            <RightBoxContent>
                This is the content of the right box.
            </RightBoxContent>
        </RightBoxContainer>
    );
};

export default RightBox;
