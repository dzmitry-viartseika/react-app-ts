import { LayoutProps } from './Layout.props';
import { Header, Footer, Sidebar } from "../layout/";
import styles from './Layout.module.scss';
import {FunctionComponent} from "react";

export const Layout = (
    {
        children
    }: LayoutProps
): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main className={styles.body}>
                Layout = {children}
            </main>
            <Footer className={styles.footer}/>
        </div>
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
