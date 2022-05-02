import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    console.log('menu', menu);
    console.log('setMenu', setMenu);
    console.log('firstCategory', firstCategory);
    return (
        <nav>
            {menu.map((m) => (
                    <div key={m._id.secondCategory}>{m._id.secondCategory}</div>
                ))}
        </nav>
    );
};
