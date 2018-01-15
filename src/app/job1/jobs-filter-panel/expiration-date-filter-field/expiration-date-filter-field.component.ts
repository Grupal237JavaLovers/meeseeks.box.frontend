import {Component, OnInit, ViewEncapsulation, EventEmitter, Output} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'mb-expiration-date-filter-field',
  templateUrl: './expiration-date-filter-field.component.html',
  styleUrls: ['./expiration-date-filter-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpirationDateFilterFieldComponent implements OnInit {
  expirationDateValue: any;

  constructor() {
  }

  ngOnInit() {
    this.ExpirationDateValue.emit(this.expirationDateValue);
  }

  @Output() ExpirationDateValue = new EventEmitter();

  expirationDateValueSelected(){
    this.ExpirationDateValue.emit(this.expirationDateValue);
  }

}
