import React, { useEffect, useState } from 'react';
import { favorites } from '../../../services';
import MovieItem from '../../templates/movieList';

const FavoritesPage = () => {
    const [favMovies, setFamovies] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const resFavMovies = await favorites.getAll();
            setFamovies(resFavMovies);
        } catch (error) {
            console.log('error on fetch fav movies', error);
        }
    }

    return (
        <>
            <span>Favorites: {favMovies.length}</span>
            <MovieItem movies={favMovies} />
        </>
    );
}

export default FavoritesPage;