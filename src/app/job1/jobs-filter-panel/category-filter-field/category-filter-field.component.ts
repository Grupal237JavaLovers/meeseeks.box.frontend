import {Component, OnInit, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

import { JobService } from '../../job.service';

@Component({
  selector: 'mb-category-filter-field',
  templateUrl: './category-filter-field.component.html',
  styleUrls: ['./category-filter-field.component.scss',],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFilterFieldComponent implements OnInit {
  categories = [];
  categoryValue: any;

  constructor(private jobService: JobService) {
    jobService.getAllCategories().then(res => this.categories = res);
  }

  ngOnInit() {
    this.CategoryValue.emit(this.categoryValue);
  }

  @Output() CategoryValue = new EventEmitter();

  categoryValueSelected(){
    let category: any = this.getCategoryById(this.categoryValue);
    this.CategoryValue.emit(category);
  }

  getCategoryById(id: any){
    return this.categories.find(function (element) {
      return element.id == id;
    })
  }

}
