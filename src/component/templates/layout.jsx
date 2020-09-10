import React from 'react';
import { AppBar, SideBar, MainContent } from '../molecules';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import AppRoutes from '../_routes';

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.4fr 1.6fr 1fr 1fr;
    grid-template-rows: 0.1fr 1.9fr 1fr;;
    grid-template-areas: 
        "topbar topbar topbar topbar"
        "sidebar main main main"
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
            <MainContent>
                <Switch>
                    {
                        AppRoutes.map((rout, idx) =>
                            <Route
                                exact={true}
                                key={`${idx}_page`}
                                path={rout.route}
                                render={props => <rout.component {...props} />}
                            />
                        )
                    }
                </Switch>
            </MainContent>
        </Layout>
    )
}

export default LayoutTemplate;