import React from 'react';
import styled from 'styled-components';

const AppBar = styled.div`
    background-color: red;
    grid-area: topbar;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
`;

const C_AppBar = () => {
    return (
        <AppBar>
            <span>Logo</span>
            <span>USer</span>
        </AppBar>
    )
}

export default C_AppBar;