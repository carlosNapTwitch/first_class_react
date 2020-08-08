import React, { useEffect, useState } from 'react';
import { peoples } from '../../../services';
import { Link, useHistory, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const CharacterList = ({ onSelectCharacter }) => {
    const [characters, setCharacters] = useState(null);
    const history = useHistory();
    let query = useQuery();

    const fetchData = async (urlParam) => {
        const serverData = await peoples.getAll(urlParam);
        setCharacters(serverData);
    }

    useEffect(() => {
        fetchData(`?page=${query.get("page") || ''}`);
    }, []);

    const requestMoreData = (serverUrl) => {
        const [baseUrl, params] = serverUrl.split('?');
        history.push(`?${params}`);
        history.go(0);
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