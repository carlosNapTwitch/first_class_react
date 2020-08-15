import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBar = styled.div`
    grid-area: sidebar;
    max-width: 10vw;
    height: 100%;
    padding: 1%;
    box-shadow: 1px 3px 2px 0px #b5b5b5;
    @media(max-width: 450px) {
        display: none;
    }
`;

const Menu = styled.ul`
    margin: 0;
    padding: 0;
    & a {
        text-decoration: none;
    }
    & li {
        list-style-type: none;
        padding: 6%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: rgb(166 166 166);
            color: #fff;
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
            route: '/favorites',
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
                        <Link key={idx} to={section.route}>
                            <li>
                                {section.label}
                            </li>
                        </Link>
                    )
                }
            </Menu>
        </SideBar>
    )
}

export default C_SideMenu;