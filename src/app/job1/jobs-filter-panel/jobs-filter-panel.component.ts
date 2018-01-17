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
  filterResult = [];

  category: any;
  expirationDate: any;
  location: any;
  minPrice: any;
  maxPrice: any;
  type: any;

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

  @Output() FilterResult = new EventEmitter();

  applyFilter(){
    this.result = [];

    if(!isUndefined(this.category)) { this.jobService.getJobsByCategory(this.category).then(res => this.result.push(res)); }

    if(!isUndefined(this.location)) { this.jobService.getJobsByLocation(this.location).then(res => this.result.push(res)); }

    //if(!isUndefined(this.expirationDate)) { this.jobService.getJobsByExpirationDate(this.expirationDate).then(res => this.result.push(res)); }

    if(!isUndefined(this.minPrice) && !isUndefined(this.maxPrice)) { this.jobService.getJobsByPriceBetween(this.minPrice, this.maxPrice).then(res => this.result.push(res)); }

    if(!isUndefined(this.type)) { this.jobService.getJobsByType(this.type).then(res => this.result.push(res)); }

    Promise.all(this.result).then(() => {
      this.result = [].concat.apply(this.result);
      this.FilterResult.emit(this.result);
    });

  }

  categoryChangedHandler(category:any)
  {
    if(category != null) this.category = category;
  }
  expirationDateChangedHandler(expirationDate:any)
  {
    if(expirationDate != null) this.expirationDate = expirationDate;
  }
  locationChangedHandler(location:any)
  {
    if(location != null) this.location = location;
  }
  minPriceChangedHandler(minPrice: any)
  {
    if(minPrice != null) this.minPrice = minPrice;
  }
  maxPriceChangedHandler(maxPrice: any )
  {
    if(maxPrice != null) this.maxPrice = maxPrice;
  }
  typeChangedHandler(type:any)
  {
    if(type != null) this.type = type;
  }
}
