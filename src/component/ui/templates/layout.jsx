import React from 'react';
import { AppBar, SideBar, MainContent } from '../molecules';
import styled from 'styled-components';

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.6fr 1.1fr 1.4fr 0.9fr;
    grid-template-rows: 0.2fr 1.8fr;
    grid-template-areas: 
        "topbar topbar topbar topbar"
        "sidebar main main main";
    @media(max-width: 450px) {
        grid-template-areas:
            "topbar topbar topbar topbar"
            "main main main main";
    }
`;

const LayoutTemplate = () => {
    return (
        <Layout>
            <AppBar>TopBar</AppBar>
            <SideBar>SideBar</SideBar>
            <MainContent>Content</MainContent>
        </Layout>
    )
}

export default LayoutTemplate;