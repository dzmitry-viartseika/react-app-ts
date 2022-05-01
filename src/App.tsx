import React from 'react';
import { TheButton, Ptag } from "./components/";

function App(): JSX.Element {
  return (
    <div className={'App'}>
        <TheButton
            children={`primary`}
            appearance={`primary`}
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
