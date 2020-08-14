import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    const sections = [
        {
            label: 'Dashboard',
            route: '/',
        },
        {
            label: 'Favoritas',
            route: '/fav',
        },
        {
            label: 'Buscador',
            route: '/search',
        },
        {
            label: 'Perfil',
            route: '/profile',
        }
    ]

    return (
        <SideBar>
            <Menu>
                {
                    sections.map((section, idx) =>
                        <li key={idx} >
                            <Link to={section.route}>
                                {section.label}
                            </Link>
                        </li>
                    )
                }
            </Menu>
        </SideBar>
    )
}

export default C_SideMenu;