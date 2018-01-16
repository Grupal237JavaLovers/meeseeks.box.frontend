import {Component, OnInit, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'mb-price-filter-field',
  templateUrl: './price-filter-field.component.html',
  styleUrls: ['./price-filter-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceFilterFieldComponent implements OnInit {

  minValue = 0;
  maxValue = 9000;

  constructor() {
  }

  ngOnInit() {
    this.MinPriceValue.emit(this.minValue);
    this.MaxPriceValue.emit(this.maxValue);
  }

  @Output() MinPriceValue = new EventEmitter();
  @Output() MaxPriceValue = new EventEmitter();

  priceValueSelected(){
    this.MaxPriceValue.emit(this.maxValue);
    this.MinPriceValue.emit(this.minValue);

  }

}
