import React, { useState, useEffect } from 'react';
import { peoples } from '../../../services';

const Character = ({ onBack, characterId }) => {

    const [characterData, setCharacterData] = useState();

    useEffect(() => {
        fetchDetails();
    }, [characterId]);

    const fetchDetails = async () => {
        const response = await peoples.getById(characterId);
        console.log(response);
        setCharacterData(response);
    }

    return (
        <>
            <button onClick={() => onBack(null)} style={{ display: 'block' }}>Regresar</button>
            {characterData && (<span>hola {characterData.name}</span>)}
        </>
    )
}

export default Character;