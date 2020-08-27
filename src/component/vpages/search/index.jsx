import React, { useState } from 'react';
import { movies, favorites } from '../../../services';
import MovieList from '../../templates/movieList';

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

    const selectFavMovie = async (item) => {
        console.log({ item });
        try {
            const response = await favorites.addNew(item);
            console.log({ response });
        } catch (error) {
            console.log('error on create favorite movie');
        }
    }

    return (
        <>
            <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={() => findMovie()}>Buscar</button>
            <MovieList movies={results} onSelectItem={selectFavMovie} />
        </>
    );
}

export default SearchPage;