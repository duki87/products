import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from '../Product.model';

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<number>
>('collection');

// export const selectProductsCollection = createSelector(
//     selectProducts,
//     selectCollectionState,
//     (products, collection) => {
//       return collection.map((id) => products.find((product) => product.id === id));
//     }
// );