import React, { useEffect, useState } from 'react';
import { peoples } from '../../services';
import MyProvider from './context/homeContext';
import CompoChildOne from './components/compo_1';

const HomePage = () => {
    const [characters, setCharacters] = useState(null);

    const fetchData = async (urlParam) => {
        const serverData = await peoples.getAll(urlParam);
        setCharacters(serverData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const requestMoreData = (serverUrl) => {
        const [baseUrl, params] = serverUrl.split('?');
        fetchData(`?${params}`);
    }


    return (
        characters &&
        <MyProvider>
            <CompoChildOne message='my message' />
            <span>Lista de personas {characters.count}</span>
            <ul>
                {
                    characters.results.map((people, idx) => (
                        <li key={idx}>{people.name}</li>
                    ))
                }
            </ul>
            <div>
                {characters.previous && <button onClick={() => requestMoreData(characters.previous)}>Previous</button>}
                {characters.next && <button onClick={() => requestMoreData(characters.next)} style={{ marginLeft: '16px' }}>Next</button>}
            </div>
        </MyProvider>
    )
}

export default HomePage;