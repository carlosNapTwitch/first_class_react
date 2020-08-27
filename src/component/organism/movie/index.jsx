import React from 'react';
import styled from 'styled-components';

const Movie = styled.div`
    position: relative;
    background-color: rebeccapurple;
    width: 10%;
    height: 24vh;
    overflow: hidden;
    margin: 1%;
    cursor: pointer;
    & > img {
        max-width: 100%;
    }
    & > span {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #000000a8;
        color: #c4c4c4;
        font-size: 0.5em;
        text-align: center;
        padding: 5% 5% 25% 5%;
    }
`;

const MovieItem = ({ movie, ...props }) => {
    return (
        <Movie {...props}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <span>{movie.original_title}</span>
        </Movie>
    )
}

export default MovieItem;