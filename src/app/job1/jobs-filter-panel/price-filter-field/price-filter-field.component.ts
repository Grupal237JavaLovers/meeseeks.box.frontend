import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'mb-price-filter-field',
  templateUrl: './price-filter-field.component.html',
  styleUrls: ['./price-filter-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceFilterFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
