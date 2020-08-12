import React from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
    background-color: purple;
    grid-area: sidebar;
    height: 100%;
    padding: 1%;
    @media(max-width: 450px) {
        display: none;
    }
`;

const Menu = styled.ul`
    padding: 0;
    & li {
        list-style-type: none;
        background-color: aliceblue;
        padding: 6%;
        cursor: pointer;
        &:hover {
            background-color: rgba(0, 0, 0, 0);
        }
    }
`;

const C_SideMenu = () => {
    return (
        <SideBar>
            <Menu>
                <li>Dashboard</li>
                <li>Favoritas</li>
                <li>Buscador</li>
                <li>Perfil</li>
            </Menu>
        </SideBar>
    )
}

export default C_SideMenu;