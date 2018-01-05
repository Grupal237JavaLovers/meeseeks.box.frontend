import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mb-category-filter-field',
  templateUrl: './category-filter-field.component.html',
  styleUrls: ['./category-filter-field.component.scss',],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFilterFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = [
    // {value: 'categorie', viewValue: 'Categorie'},
  ];

}
