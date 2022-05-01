import React, { useState, useEffect } from 'react';
import {TheButton, Ptag, Rating} from "./components/";

function App(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    const setRating = () => {
        console.log('setRating');
    };

    useEffect(() => {
        console.log('useEffect');
    }, [counter]);

  return (
    <div className={'App'}>
        counter={ counter }
        <TheButton
            children={`primary`}
            appearance={`primary`}
            onClick={handleClick}
        />

        <TheButton
            children={`ghost`}
            appearance={`ghost`}
            arrow={`down`}
        />

        <Ptag
            children={`wertey hello how are u?`}
            size={`lg`}
        />

        <Rating
            setRating={setRating}
            rating={3}
            isEditable={true}
        />
    </div>
  );
}

export default App;
