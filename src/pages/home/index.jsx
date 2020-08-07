import React, { useState } from 'react';
import MyProvider from './context/homeContext';
import CharacterList from './components/characterMaster';
import Character from './components/characterDetails';

const HomePage = () => {
    const [characterSelected, setCharacterSelected] = useState(null);

    return (
        <MyProvider>
            {/*<CompoChildOne message='my message' />*/}
            {
                (!characterSelected) ?
                    (<CharacterList onSelectCharacter={setCharacterSelected} />)
                    : (<Character onBack={setCharacterSelected} characterId={characterSelected} />)
            }
        </MyProvider>
    )
}

export default HomePage;