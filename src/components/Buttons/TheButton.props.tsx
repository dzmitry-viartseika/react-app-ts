import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TheButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none'
}
