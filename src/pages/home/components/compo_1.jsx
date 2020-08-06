import React, { useContext, useEffect } from 'react';
import CompoChildTwo from './compo_2';
import { myContext } from '../context/homeContext';

const CompoChildOne = ({ message }) => {

    const { dispatch } = useContext(myContext);

    const changeName = () => {
        dispatch({ type: 'CHANGE_NAME', payload: 'maria la del barrio' })
    }

    return (
        <>
            <div>Home Page: Characters</div>
            <button onClick={changeName}>cambiar el nombre</button>
            <CompoChildTwo message={message} />
        </>
    )
}

export default CompoChildOne;