import React from 'react';
import LayoutTemplate from './component/templates/layout';
import { useLocation, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './component/vpages/home';
import useUser from './services/user'
import './app.css';

const App = () => {
    const user = useUser();
    const location = useLocation();
    return (
        <Switch>
            <Route
                path='/dashboard'
                render={
                    () => user.isUserLogged() ?
                        <LayoutTemplate /> :
                        <Redirect to={{ pathname: '/', state: { from: location } }} />}
            />
            <Route exact={true} path='/' render={() => <HomePage />} />
        </Switch>
    )
}

export default App;