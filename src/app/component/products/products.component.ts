import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { areProductsLoading, selectProducts } from '../../store/selectors/products.selectors';
import { Product } from '../../models/product';
import { LoadProducts } from '../../store/actions/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Product[]>;
  public areProductsLoading$: Observable<boolean>;

  constructor(private productsStore: Store) {
  }

  ngOnInit(): void {
    this.products$ = this.productsStore.pipe(
      select(selectProducts)
    );

    this.areProductsLoading$ = this.productsStore.pipe(select(areProductsLoading));
  }

  public onGetProductsBtnClicked(): void {
    this.productsStore.dispatch(new LoadProducts());
  }
}
