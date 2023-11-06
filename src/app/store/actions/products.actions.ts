import { Action } from '@ngrx/store';
import { Product } from '../../models';

export enum ProductsActionTypes {
  LoadProducts = '[Products] Load Products',
  LoadProductsSuccess = '[Products] Load Products Success',
  LoadProductsFailure = '[Products] Load Products Failure',
}

export class LoadProducts implements Action {
  readonly type: ProductsActionTypes.LoadProducts = ProductsActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;

  constructor(public payload: { products: Product[] }) {
  }
}

export class LoadProductsFailure implements Action {
  readonly type = ProductsActionTypes.LoadProductsFailure;

  constructor(public payload: { error: any }) {
  }
}

export type ProductsActions = LoadProducts | LoadProductsSuccess | LoadProductsFailure;

