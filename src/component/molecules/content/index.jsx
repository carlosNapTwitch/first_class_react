import React from 'react';
import styled from 'styled-components';

const MainContent = styled.div`
    grid-area: main;
    height: 100%;
    padding: 3%;
`;

const C_Content = ({ children }) => {
    return (
        <MainContent>
            {children}
        </MainContent>
    )
}

export default C_Content;