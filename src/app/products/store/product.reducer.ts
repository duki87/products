import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from '../Product.model';

export interface ProductState {
    items: Array<Product>;
    //cart: Array<Product>;
}

export const productFeatureKey = 'products';

export const initialState: ProductState = {
    items: [],
    //cart: []
};

export const productReducer = createReducer(
    initialState,
    // on(ProductActions.AddToCart, (state, { product }) => ({ items: state.items })),
    // on(ProductActions.RemoveFromCart, (state, { product }) => ({ cart: state.cart.filter(cartItem => cartItem.id !== product.id), items: state.items })),
    on(ProductActions.LoadProducts, (state, { products }) => ({ items: products })),
);