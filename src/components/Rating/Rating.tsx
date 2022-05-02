import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from "react";

export const Rating = (
    {
        isEditable = false,
        rating,
        setRating,
        ...props
    }: RatingProps
): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<number[]>([]);
    const [arrayLength, setArrayLength] = useState<number>(1);

    const handleClick = (index: number) => {
        setArrayLength(index);
    };

    useEffect(() => {
        setRatingArray([1,2,3,4,5]);
        setArrayLength(rating);
    }, []);

    const handleSpace = (index: number, e: KeyboardEvent<HTMLElement>) => {
        if (e.code !== 'Space') {
            return; //
        }
        setArrayLength(index);
    };

    return (
        <div className={`rating`} {...props}>
            arrayLength={ arrayLength }
            {ratingArray.map((r, index) => (
                <div
                    className={`rating__item`}
                    key={r}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<HTMLElement>) => isEditable && handleSpace(index + 1, e)}
                >
                    <svg
                        onClick={() => handleClick(index + 1)}
                        className={cn(styles.star, 'bi bi-star rating__icon', {
                            [styles.fill]: r <= arrayLength
                        })
                        }
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                </div>
                ))
            }
        </div>
    );
};
