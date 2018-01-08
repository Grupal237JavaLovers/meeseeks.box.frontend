import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mb-review-grid',
  templateUrl: './review-grid.component.html',
  styleUrls: ['./review-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MbReviewGridComponent implements OnInit {
  @Input() reviews: any;
  @Input() title: string;
  @Input() received: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
