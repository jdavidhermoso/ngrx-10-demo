import { CatalogState, initalCatalogState } from './catalogState';

export interface AppState {
  catalog: CatalogState;
}

export const initalAppState: AppState = {
  catalog: initalCatalogState
};

