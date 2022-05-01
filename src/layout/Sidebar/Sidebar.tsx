import { SidebarProps } from './Sidebar.props';

export const Sidebar = (
    {
        ...props
    }: SidebarProps
): JSX.Element => {
    return (
        <aside {...props}>
            Aside
        </aside>
    );
};
