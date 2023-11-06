import { Injectable } from '@angular/core';
import { Product } from '../models';
import { Observable, of } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {
  }

  public getProducts(): Observable<Product[]> {
    return of([
      {
        id: '123nasd2-kjw32aa,nasdf2bb-vafsd1142',
        name: 'Product 1',
        image: '',
        price: 246.66,
        b2bOnly: false,
        seller: 'Cool seller',
        brand: 'Cool brand'
      }
    ]);
  }
}
