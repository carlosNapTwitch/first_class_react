import React from 'react';
import MyProvider from './context/homeContext';
import CharacterList from './components/characterMaster';
import Character from './components/characterDetails';
import { Switch, Route } from 'react-router-dom';

const HomePage = () => {

    return (
        <MyProvider>
            <Switch>
                <Route exact path='/' component={CharacterList} />
                <Route exact path='/character/:id' component={Character} />
            </Switch>
        </MyProvider>
    )
}

export default HomePage;