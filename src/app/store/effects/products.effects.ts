import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { interval, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { LoadProductsSuccess, ProductsActionTypes } from '../actions/products.actions';
import { debounce, map, switchMap, tap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models';


@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productsService: ProductsService) {
  }


  @Effect()
  loadProducts$: Observable<LoadProductsSuccess> = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProducts),
    debounce(() => interval(5000)),
    switchMap(() => {
      return this.productsService.getProducts()
        .pipe(
          map((products: Product[]) => new LoadProductsSuccess({
            products
          }))
        );
    })
  );

  @Effect({dispatch: false})
  loadProductsFailed$: Observable<LoadProductsSuccess> = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProductsFailure),
    tap(() => {
      // TODO: Show error modal
    })
  );
}
