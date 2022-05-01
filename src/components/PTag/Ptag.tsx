import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.scss';
import cn from 'classnames';

enum TextSize {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
}

export const Ptag = (
    {
        children,
        size = TextSize.MD,
        className,
        ...props
    }: PtagProps
) => {
    return (
        <p className={cn(styles.paragraph, className, {
                [styles.md]: size === TextSize.MD,
                [styles.xs]: size === TextSize.XS,
                [styles.sm]: size === TextSize.SM,
                [styles.lg]: size === TextSize.LG,
            }
        )}
           {...props}
        >
            { children }
        </p>
    );
};
