import {Component, OnInit, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import { JobService } from '../job.service';
import {isUndefined} from "util";

@Component({
  selector: 'mb-jobs-filter-panel',
  templateUrl: './jobs-filter-panel.component.html',
  styleUrls: ['./jobs-filter-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JobsFilterPanelComponent implements OnInit {
  result = [];

  category: any;
  expirationDate: any;
  location: any;
  minPrice = 0;
  maxPrice = 90000;
  type: any;

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

  @Output() FilterResult = new EventEmitter();

  applyFilters(){
    while(this.result.length > 0) { this.result.pop(); }

    if(this.category) { var getJobsByCategory = this.jobService.getJobsByCategory(this.category).then(res => this.result.push(res)); }

    if(this.location) { console.log(this.location); var getJobsByLocation = this.jobService.getJobsByLocation(this.location).then(res => this.result.push(res)); }

    //if(this.expirationDate) { var getJobsByDate = this.jobService.getJobsByExpirationDate(this.expirationDate).then(res => this.result.push(res)); }

    if(!isUndefined(this.minPrice) && !isUndefined(this.maxPrice)) { var getJobsByPrice = this.jobService.getJobsByPriceBetween(this.minPrice, this.maxPrice).then(res => this.result.push(res)); }

    if(this.type) { var getJobsByType = this.jobService.getJobsByType(this.type).then(res => this.result.push(res)); }

    Promise.all([getJobsByCategory, getJobsByLocation, getJobsByPrice, getJobsByType]).then(() => {
      if (this.result.length != 1) {
        var filterResult = [];
        for (let arrayElement of this.result[0]) {
          for (let filteredArray of this.result.slice(1))
            for (let el of filteredArray)
              if (el.id == arrayElement.id)               //javascript e de vina. N-are functie de intersectie
                filterResult.push(arrayElement);
        }
        this.FilterResult.emit(filterResult);
      }
      else{
        this.FilterResult.emit(this.result[0]);
      }
    });
  }

  clearFilters(){
    this.category = null;
    this.type = null;
    this.minPrice = 0;
    this.maxPrice = 90000;
    this.location = null;
    this.expirationDate = null;
    this.applyFilters();
  }

  categoryChangedHandler(category:any)
  {
    this.category = category;
  }
  expirationDateChangedHandler(expirationDate:any)
  {
    this.expirationDate = expirationDate;
  }
  locationChangedHandler(location:any)
  {
    this.location = location;
  }
  minPriceChangedHandler(minPrice: any)
  {
    this.minPrice = minPrice;
  }
  maxPriceChangedHandler(maxPrice: any )
  {
    this.maxPrice = maxPrice;
  }
  typeChangedHandler(type:any)
  {
    this.type = type;
  }
}
