import React, { useState, useEffect } from 'react';
import { TheButton, Ptag } from "./components/";

function App(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    useEffect(() => {
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
    </div>
  );
}

export default App;
