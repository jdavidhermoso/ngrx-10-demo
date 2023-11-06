import { ProductsActions, ProductsActionTypes } from '../actions/products.actions';
import { CatalogState, initalCatalogState } from '../models/catalogState';

export function catalogReducer(
  state = initalCatalogState,
  action: ProductsActions
): CatalogState {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts: {
      return {
        ...state,
        loadingProducts: true
      };
    }
    case ProductsActionTypes.LoadProductsSuccess: {
      return {
        ...state,
        loadingProducts: false,
        products: action?.payload?.products
      };
    }

    default: {
      return state;
    }
  }
}
