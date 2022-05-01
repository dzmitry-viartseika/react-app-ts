import { LayoutProps } from './Layout.props';
import { Header, Footer, Sidebar } from "../layout/";

export const Layout = (
    {
        children
    }: LayoutProps
): JSX.Element => {
    return (
        <>
            <Header />
            <div>
               <Sidebar />
                <main>
                    Layout = {children}
                </main>
            </div>
            <Footer />
        </>
    );
};
