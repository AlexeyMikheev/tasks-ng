import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../mocks/products';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Output()
  public addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  @Input()
  public product!: IProduct;

  addProduct() {
    this.addToCart.emit(this.product);
  }
}
