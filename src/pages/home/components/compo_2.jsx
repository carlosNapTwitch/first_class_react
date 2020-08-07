import React, { useContext } from 'react';
import { myContext } from '../context/homeContext';

const CompoChildTwo = ({ message }) => {
    const { state } = useContext(myContext);

    return (
        <>
            <div>{state.name}</div>
            <div>Hola soy child 2 msg: {message}</div>
        </>
    )
}

export default CompoChildTwo;