import React, { useState } from 'react';
import { movies } from '../../../services';
import MovieItem from '../../organism/movie';
import styled from 'styled-components';

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);


    const findMovie = async () => {
        try {
            const response = await movies.search(query);
            setResults(response.results);
        } catch (error) {
            console.log({ error });
        }
    }
    return (
        <>
            <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={() => findMovie()}>Buscar</button>
            <MovieContainer>
                {
                    results.map((item, idx) =>
                        <MovieItem key={`movie_item_${idx}`} movie={item} />)
                }
            </MovieContainer>
        </>
    );
}

export default SearchPage;