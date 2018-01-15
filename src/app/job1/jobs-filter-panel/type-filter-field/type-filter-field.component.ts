import {Component, OnInit, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
  selector: 'mb-type-filter-field',
  templateUrl: './type-filter-field.component.html',
  styleUrls: ['./type-filter-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeFilterFieldComponent implements OnInit {
  typeValue: any;

  constructor() {
  }

  ngOnInit() {
    this.TypeValue.emit(this.typeValue);
  }

  @Output() TypeValue = new EventEmitter();

  typeValueSelected(){
    this.TypeValue.emit(this.typeValue);
  }

  types = [
    {value: 'fullTime', viewValue: 'Full Time'},
    {value: 'partTime', viewValue: 'Part Time'},
    {value: 'volunteer', viewValue: 'Volunteer'}
  ];
}
