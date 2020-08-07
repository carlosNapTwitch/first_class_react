import React, { useEffect, useState } from 'react';
import { peoples } from '../../../services';
import { Link } from 'react-router-dom';

const CharacterList = ({ onSelectCharacter }) => {
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

    const onPickCharacter = (people) => {
        onSelectCharacter(people.url.split('/')[5]);
    }

    return (
        characters &&
        <>
            <span>Lista de personas {characters.count}</span>
            <ul>
                {
                    characters.results.map((people, idx) => (
                        <li key={idx} >
                            <Link to={`/character/${people.url.split('/')[5]}`}>{people.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <div>
                {characters.previous && <button onClick={() => requestMoreData(characters.previous)}>Previous</button>}
                {characters.next && <button onClick={() => requestMoreData(characters.next)} style={{ marginLeft: '16px' }}>Next</button>}
            </div>
        </>
    )
}

export default CharacterList;