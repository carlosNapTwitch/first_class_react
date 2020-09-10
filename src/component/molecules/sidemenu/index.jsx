import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import useUSer from '../../../services/user';

const SideBar = styled.div`
    grid-area: sidebar;
    max-width: 10vw;
    height: 100%;
    padding: 1%;
    box-shadow: 1px 3px 2px 0px #b5b5b5;
    position: relative;
    @media(max-width: 450px) {
        display: none;
    }
`;

const Menu = styled.ul`
    margin: 0;
    padding: 0;
    & a {
        text-decoration: none;

    };
    & li {
        list-style-type: none;
        padding: 6%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: rgb(166 166 166);
            color: #fff;
        }
    };
    & .logout {
        position: absolute; 
        bottom: 0;
        width: 100%;
    }
`;

const C_SideMenu = () => {
    const user = useUSer();
    const history = useHistory();

    const base = '/dashboard';

    const sections = [
        {
            label: 'Dashboard',
            route: '/main',
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
    ].map(item => { item.route = `${base}${item.route}`; return item });

    const doLogOut = () => {
        user.logout();
        history.replace('/')
    }

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
                <li className='logout' onClick={doLogOut}>
                    LogOut
                </li>
            </Menu>
        </SideBar>
    )
}

export default C_SideMenu;