import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode,
    size?: 'xs' | 'sm' | 'md' | 'lg',
}
