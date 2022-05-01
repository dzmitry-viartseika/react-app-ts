import { TheButtonProps } from './TheButton.props';
import styles from './Button.module.scss';
import cn from 'classnames';

enum ButtonColors {
    Primary = 'primary',
    Ghost = 'ghost',
}

enum ArrowIcon {
    Right = 'right',
    Down = 'down',
    None = 'none',
}

export const TheButton =
    ({
         children,
         appearance,
         className,
         arrow = ArrowIcon.None,
        ...props
     }: TheButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary] : appearance === ButtonColors.Primary,
                [styles.ghost] : appearance === ButtonColors.Ghost
            })}
            {...props}
        >
            { children }
            {
                arrow !== ArrowIcon.None ? <span className={cn(styles.arrow, {
                    [styles.down]: arrow === ArrowIcon.Down}
                )}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0
                         .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </span> : null
            }
        </button>
    );
};
