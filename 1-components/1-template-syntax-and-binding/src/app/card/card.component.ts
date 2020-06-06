import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct, IProductImage } from '../../mocks/products';


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

  get previewImage(): IProductImage {
    return this.product.images[0];
  }

  addProduct() {
    this.addToCart.emit(this.product);
  }

}
