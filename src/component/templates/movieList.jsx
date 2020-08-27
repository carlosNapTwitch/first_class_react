import React from 'react';
import styled from 'styled-components';
import MovieItem from '../organism/movie';

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const MovieList = ({ movies, onSelectItem = () => { } }) => {
    return (
        <MovieContainer>
            {
                movies.map((item, idx) =>
                    <MovieItem
                        key={`movie_item_${idx}`}
                        onClick={() => onSelectItem(item)}
                        movie={item}
                    />)
            }
        </MovieContainer>
    )
}

export default MovieList;