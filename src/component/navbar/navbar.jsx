import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <span>logo</span>
            <span>
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
            </span>
        </nav>
    )
}

export default NavBar;