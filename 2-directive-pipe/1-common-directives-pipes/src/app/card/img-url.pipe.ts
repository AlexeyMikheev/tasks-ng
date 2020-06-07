import { Pipe, PipeTransform } from '@angular/core';
import { IProductImage } from './../../mocks/products';

@Pipe({
  name: 'imgUrl',
})
export class ImgUrlPipe implements PipeTransform {
  transform(images: IProductImage[]): string {
    if (images.length == 0) {
      return '';
    }
    return images[0].url;
  }
}
