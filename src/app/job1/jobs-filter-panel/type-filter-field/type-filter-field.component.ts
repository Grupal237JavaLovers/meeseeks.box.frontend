import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mb-type-filter-field',
  templateUrl: './type-filter-field.component.html',
  styleUrls: ['./type-filter-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeFilterFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  types = [
    {value: 'fullTime', viewValue: 'Full Time'},
    {value: 'partTime', viewValue: 'Part Time'},
    {value: 'volunteer', viewValue: 'Volunteer'}
  ];
}
