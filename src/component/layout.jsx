import React, { useState } from 'react';
import NavBar from './navbar/navbar';
import SideBar from './sidebar/sidebar';
import ContentComponent from './content/content';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';

const Layout = () => {
    const [pageSelected, setPageSelected] = useState('home');

    const layoutStyle = {
        width: '100%',
        height: '100%'
    }

    const selectPage = () => {
        if (pageSelected === 'home')
            return (<HomePage />)
        else
            return (<AboutPage />)
    }

    return (
        <div style={layoutStyle}>
            <NavBar />
            <SideBar onSelectPage={setPageSelected} />
            <ContentComponent>
                {selectPage()}
            </ContentComponent>
        </div>
    )
}

export default Layout;