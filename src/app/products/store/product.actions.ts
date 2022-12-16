import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { Product } from '../Product.model';

export enum ActionTypes {
    // AddToCart = '[Product] Add To Cart',
    // RemoveFromCart = '[Product] Remove From Cart',
    LoadItems = '[Product] Load Products',
    LoadSuccess = '[Product] Load Success',
    Create = '[Product] Product Created',
    Remove = '[Product] Product Removed'
}

// export const AddToCart = createAction(
//     ActionTypes.AddToCart,
//     props<{ product: Product }>()
// );

// export const RemoveFromCart = createAction(
//     ActionTypes.RemoveFromCart,
//     props<{ product: Product }>()
// );

// export const GetProducts = createAction(
//     ActionTypes.LoadItems,
// );

export const LoadProducts = createAction(
    ActionTypes.LoadSuccess,
    props<{ products: Product[] }>()
);

// export class AddToCart implements Action {
//     readonly type = ActionTypes.AddToCart;
//     constructor(public payload: Product) {}
// }

// export class RemoveFromCart implements Action {
//     readonly type = ActionTypes.RemoveFromCart;
//     constructor(public payload: Product) {}
// }

// export class GetProducts implements Action {
//     readonly type = ActionTypes.LoadItems;
// }

// export class LoadProducts implements Action {
//     readonly type = ActionTypes.LoadSuccess;
//     constructor(public payload: Product[]) {}
// }