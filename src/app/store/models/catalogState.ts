import { Product } from '../../models';

export interface CatalogState {
  products: Product[];
  loadingProducts: boolean;
}

export const initalCatalogState: CatalogState = {
  products: [],
  loadingProducts: false
};
