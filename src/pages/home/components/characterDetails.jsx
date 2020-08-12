import React, { useState, useEffect } from 'react';
import { peoples } from '../../../services';
import {
    useParams,
    useHistory
} from "react-router-dom";
import { CustomButton } from '../../../component/ui/atoms';

const Character = () => {

    const btnStyleDefault = {
        backgroundColor: 'red',
        display: 'block'
    };

    const history = useHistory();

    let { id } = useParams();

    const [characterData, setCharacterData] = useState();
    const [btnStyle, setBtnStyle] = useState(btnStyleDefault);

    useEffect(() => {
        fetchDetails();
        setBtnStyle({ ...btnStyleDefault, backgroundColor: 'pink' });
        setTimeout(() => {
            setBtnStyle(btnStyleDefault);
        }, 3000);
    }, [id]);

    const fetchDetails = async () => {
        const response = await peoples.getById(id);
        console.log(response);
        setCharacterData(response);
    }

    return (
        <>
            <CustomButton
                onClick={() => history.goBack()}
                variant='primary'
            >
                Regresar {id}
            </CustomButton>
            {characterData && (<span>hola {characterData.name}</span>)}
        </>
    )
}

export default Character;