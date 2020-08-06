import React, { useReducer } from 'react';

const myReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
        default:
            return state;
    }
}

// primer crear contexto
export const myContext = React.createContext();


// segundo crear el provider
const MyProvider = ({ children }) => {
    const myInitialState = {
        id: 'asdf1234',
        name: 'pepe lopez',
        age: 21
    }

    const [state, dispatch] = useReducer(myReducer, myInitialState);

    return (
        <myContext.Provider value={{ state, dispatch }}>
            {children}
        </myContext.Provider>
    )
}




export default MyProvider;


