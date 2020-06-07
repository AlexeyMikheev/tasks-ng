import { Component, Input } from '@angular/core';

export enum StarsIcon {
  FILLED = 'star',
  HALF = 'star_half',
  BORDERED = 'star_border',
}

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass'],
})
export class StarRatingComponent {
  public stars: { icon: StarsIcon; active: boolean }[] = [];
  public starsCount = 5;

  @Input()
  set rate(value: number) {
    if (value === null) {
      value = 0;
    }
    this.stars = [];
    const integerPart = Math.floor(value);
    const doublePart = value % 1;

    for (let index = 0; index < this.starsCount; index++) {
      const star = { icon: StarsIcon.BORDERED, active: false };

      if (integerPart > index) {
        star.icon = StarsIcon.FILLED;
        star.active = true;
      }
      else if (integerPart < index) {
        star.icon = StarsIcon.BORDERED;
      }
      else if (0 <= doublePart && doublePart < 0.25) {
        star.icon = StarsIcon.BORDERED;
      }
      else if (doublePart > 0.25 && doublePart < 0.75) {
        star.icon = StarsIcon.HALF;
        star.active = true;
      }
      else if (doublePart >= 0.75) {
        star.icon = StarsIcon.FILLED;
        star.active = true;
      }

      this.stars.push(star);
    }
  }
}
