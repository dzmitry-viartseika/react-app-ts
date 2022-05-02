import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = (
    {
        ...props
    }: FooterProps
): JSX.Element => {
    return (
        <footer className={styles.footer} {...props}>
            <div>
                Test (C) 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="#" target={`_blank`}>Пользовательское соглашение</a>
            <a href="#" target={`_blank`}>Политика конфиденциальности</a>
        </footer>
    );
};
