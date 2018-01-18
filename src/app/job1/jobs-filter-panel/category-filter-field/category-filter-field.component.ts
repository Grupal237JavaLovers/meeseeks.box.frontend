import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { JobService } from '../../job.service';

@Component({
  selector: 'mb-category-filter-field',
  templateUrl: './category-filter-field.component.html',
  styleUrls: ['./category-filter-field.component.scss',],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFilterFieldComponent implements OnInit {
  categories = [];
  @Input() categoryValue: any;
  @Output() CategoryValue = new EventEmitter();

  constructor(private jobService: JobService) {
    jobService.getAllCategories().then(res => this.categories = res);
  }

  ngOnInit() {
    this.CategoryValue.emit(this.categoryValue);
  }


  categoryValueSelected() {
    const category: any = this.getCategoryById(this.categoryValue);
    this.CategoryValue.emit(category);
  }

  getCategoryById(id: any) {
    return this.categories.find(function (element) {
      return element.id === id;
    });
  }

}
