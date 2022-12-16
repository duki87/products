import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { ActionTypes } from './product.actions';
 
@Injectable()
export class ProductEffects {
 
  loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.LoadItems),
        mergeMap(() => this._productService.getAll()
            .pipe(
                map(products => ({ type: ActionTypes.LoadSuccess, products: products })),
                catchError(() => EMPTY)
            ))
        )
    );
 
    constructor(
        private actions$: Actions,
        private _productService: ProductService
    ) {}
}