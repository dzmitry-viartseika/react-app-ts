// Если много контекстов, то разбиваем на модули

import {createContext, ReactNode, useState} from 'react';

enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}

export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    }
    pages: PageItem[];
}

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses});

export const AppContextProvider = ({ menu, firstCategory, children }: IAppContext & { children: ReactNode }) : JSX.Element => {

    const [menuState, setMenuState] = useState<MenuItem>(menu);

    const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu)}
}

    return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }>
        { children }
    </AppContext.Provider>;
}
