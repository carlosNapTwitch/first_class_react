import React from 'react';
import styled from 'styled-components';

const AppBar = styled.div`
    grid-area: topbar;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    border-bottom: 1px solid #e3e3e3;
`;

const Logo = styled.span`
    width: 45px;
    & img {
        max-width: 100%
    }
`;

const C_AppBar = () => {
    return (
        <AppBar>
            <Logo>
                <img src='https://ellenteweb.files.wordpress.com/2017/04/movie-icon-27.png?w=900' />
            </Logo>
            <span>USer</span>
        </AppBar>
    )
}

export default C_AppBar;