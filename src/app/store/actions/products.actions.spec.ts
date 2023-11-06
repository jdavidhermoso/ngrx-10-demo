import * as ProductsActions from './products.actions';

describe('Products', () => {
  it('should create an instance', () => {
    expect(new ProductsActions.LoadProductss()).toBeTruthy();
  });
});
