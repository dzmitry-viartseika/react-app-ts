import React, {useState, useEffect, useReducer} from 'react';
import {TheButton, Ptag, Rating} from "./components/";
import { withLayout } from './layout/Layout';
import { sortReducer } from "./context/reducer/sort.reducer";
import {useScrollY} from "./hooks/useScrollY";

enum SortEnum {
    Price,
    Rating,
}

function App(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const y = useScrollY();
    // const [{products: sortedProducts}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

    // const setSort = (sort: SortEnum) => {
    //     dispatchSort({type: sort});
    // };

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
        y={y}
          </div>
  );
}

export default App;
// export default withLayout(App);
