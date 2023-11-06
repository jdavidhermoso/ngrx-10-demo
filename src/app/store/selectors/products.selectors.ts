import { createSelector } from '@ngrx/store';
import { AppState } from '../models/appState';
import { CatalogState } from '../models/catalogState';


const selectCatalog = (state: AppState) => state.catalog;
export const selectProducts = createSelector(
  selectCatalog,
  (state: CatalogState) => state.products
);

export const areProductsLoading = createSelector(
  selectCatalog,
  (state: CatalogState) => state.loadingProducts
);
