import React from 'react';
import styled from 'styled-components';

const AppBar = styled.div`
    grid-area: topbar;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    border-bottom: 1px solid #e3e3e3;
`;

const Logo = styled.span`
    width: 30px;
    height: 30px;
    & img {
        max-height: 100%;
        max-width: 100%
    }
`;

const C_AppBar = () => {
    return (
        <AppBar>
            <Logo>
<<<<<<< HEAD
                <img src='https://ellenteweb.files.wordpress.com/2017/04/movie-icon-27.png?w=900' alt='imagexD' />
=======
                <img src='https://ellenteweb.files.wordpress.com/2017/04/movie-icon-27.png?w=900' alt="logo" />
>>>>>>> a29032ebcebc3beb7dc902b411506b9cdff0f6e5
            </Logo>
            <span>USer</span>
        </AppBar>
    )
}

export default C_AppBar;