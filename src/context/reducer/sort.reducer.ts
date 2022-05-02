enum SortEnum {
    Price,
    Rating,
}

export interface IProductModel {
    id: number;
    title: string;
    price: string;
    rating: string;
}

export interface ISortReducerState {
    sort: SortEnum;
    products: IProductModel[];
}

export type SortActions = { type: SortEnum.Price} | { type: SortEnum.Rating };

export const sortReducer = (state: ISortReducerState, action: SortActions): ISortReducerState => {
    switch (action.type) {
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a,b) => a.price > b.price ? -1 : 1)
            };
        case SortEnum.Rating:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a,b) => a.rating > b.rating ? -1 : 1)
            };
        default:
            throw new Error('Неверный тип сортировки');
    }
};
