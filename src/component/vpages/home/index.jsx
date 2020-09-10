import React, { useState } from 'react';
import styled from 'styled-components';
import useUser from '../../../services/user';
import { useHistory } from 'react-router-dom';

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
`;

const HomePage = () => {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const users = useUser();
    const history = useHistory();

    const doLogin = (event) => {
        event.preventDefault();
        if (users.login(userData)) {
            console.log('user authorized')
            history.replace('/dashboard/main')
        } else {
            console.log('user unauthorized');
        }
    }

    const handleInput = (event) => {
        const tmpUserData = { ...userData };
        tmpUserData[event.target.name] = event.target.value;
        setUserData(tmpUserData);
    }

    return (
        <HomeWrapper>
            <span>Hola bienvenido</span>
            <FormLogin>
                <label>Username</label>
                <input type='text' onChange={handleInput} name='username' value={userData.username} />
                <label>Password</label>
                <input type='text' onChange={handleInput} name='password' value={userData.password} />
                <button onClick={e => doLogin(e)}>Entrar a mis películas</button>
            </FormLogin>
        </HomeWrapper>
    )
}

export default HomePage;