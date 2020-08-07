import React, { useState, useEffect } from 'react';
import { peoples } from '../../../services';
import {
    useParams
} from "react-router-dom";

const Character = ({ onBack }) => {

    let { id } = useParams();

    const [characterData, setCharacterData] = useState();

    useEffect(() => {
        fetchDetails();
    }, [id]);

    const fetchDetails = async () => {
        const response = await peoples.getById(id);
        console.log(response);
        setCharacterData(response);
    }

    return (
        <>
            <button onClick={() => onBack(null)} style={{ display: 'block' }}>Regresar {id}</button>
            {characterData && (<span>hola {characterData.name}</span>)}
        </>
    )
}

export default Character;