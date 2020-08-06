import React, { useState, useEffect } from 'react';

const FormComponent = () => {

    const [user, setUser] = useState({});

    const capturar = (e) => {
        e.preventDefault();
        console.log(user);
    }

    const handleForm = ({ target }) => {
        const userCopy = { ...user };
        userCopy[target.name] = target.value;
        setUser(userCopy);
    }

    const validate = () => {
        const formValidations = ['name', 'lastname', 'age', 'sex'];
        const userKeys = Object.keys(user);
        const validation = JSON.stringify(userKeys) === JSON.stringify(formValidations);
        setFormValidated(validation);
    }

    /* const inputValidations = (targetName) => {
         return {
             name: () => user['name'].length > 0,
             lastname: false,
             age: false,
             sex: false
         }
     }*/

    const [formValidated, setFormValidated] = useState(false);

    const myForm = {
        name: {
            type: 'text',
            validated: false
        },
        secondName: {
            type: 'text',
            validated: false
        },
        lastname: {
            type: 'text',
            validated: false,
        },
        age: {
            type: 'number',
            validated: false,
        },
        sex: {
            type: 'select',
            validated: false,
            options: [{ label: 'masculino', value: 'm' }, { label: 'femenino', value: 'f' }]
        }
    }

    useEffect(
        validate
        , [user]);

    return (
        <form>
            {
                Object.keys(myForm).map((key, idx) => (
                    <>
                        {
                            myForm[key].type !== 'select' && (
                                <div key={idx}>
                                    <label>{key}</label>
                                    <input type={myForm[key].type} name={key} onChange={handleForm} />
                                </div>
                            )
                        }
                        {
                            myForm[key].type === 'select' && (
                                <div key={idx}>
                                    <label>{key}</label>
                                    <select name={key} defaultValue="-" onChange={handleForm}>
                                        {
                                            myForm[key].options.map((opt, idx) => (
                                                <option value={opt.value} key={'option' + idx}>{opt.label}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            )
                        }
                    </>
                ))
            }
            <div>
                <button onClick={capturar} disabled={formValidated}>Enviar</button>
            </div>
        </form>
    )
}

export default FormComponent;