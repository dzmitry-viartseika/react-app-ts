import { LayoutProps } from './Layout.props';
import { Header, Footer, Sidebar } from "../layout/";
import {FunctionComponent} from "react";

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

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
