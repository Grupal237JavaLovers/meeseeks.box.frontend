import { Component, Input } from '@angular/core';

@Component({
  selector: 'mb-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class MbRatingComponent {
  @Input() rating: number;
  constructor() {
  }

  getStar(number) {
    return number <= this.rating ? '★' : '☆';
  }
}
