import { Component } from '@angular/core';
import { IProduct, products } from '../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public products: IProduct[] = products;

  public chosenProduct!: IProduct;

  addProduct($event: IProduct) {
    this.chosenProduct = $event;
  }
}
