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
  filterResults = [];
  result = [];

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
    this.filterResults = [];
    this.result = [];
    var localResult: any;
    var that = this;

    if(!isUndefined(this.category)) { this.jobService.getJobsByCategory(this.category).then(res => localResult = res); }
    else { localResult = null; }
    console.log(localResult);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    if(!isUndefined(this.location)) { this.jobService.getJobsByLocation(this.location).then(res => localResult = res); }
    else { localResult = null; }
    console.log(localResult);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    if(!isUndefined(this.expirationDate)) { this.jobService.getJobsByExpirationDate(this.expirationDate).then(res => localResult = res); }
    else { localResult = null; }
    console.log(localResult);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    if(!isUndefined(this.minPrice) && !isUndefined(this.maxPrice)) { this.jobService.getJobsByPriceBetween(this.minPrice, this.maxPrice).then(res => localResult = res) }
    else { localResult = null; }
    console.log("LR: " + localResult);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    if(!isUndefined(this.type)) { this.jobService.getJobsByType(this.type).then(res => localResult = res); }
    else { localResult = null; }
    console.log(localResult);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    console.log( "vectorul de rezultate" + this.filterResults);
    this.result = [].join.apply([], this.filterResults);

    if(this.result == [])
      this.jobService.getJobs().then(res => this.result = res);

    this.FilterResult.emit(this.result);
  }

  categoryChangedHandler(category:any)
  {
      console.log("-s-a primit categoria filter panel");
      console.log(category);
    if(category != null) this.category = category;
  }
  expirationDateChangedHandler(expirationDate:any)
  {
    console.log("-s-a primit expiration Date filter panel");
    console.log(this.expirationDate);
    if(expirationDate != null) this.expirationDate = expirationDate;
  }
  locationChangedHandler(location:any)
  {
    console.log("-s-a primit location filter panel");
    console.log(location);
    if(location != null) this.location = location;
  }
  minPriceChangedHandler(minPrice: any)
  {
    console.log("-s-a primit min price filter panel");
    console.log(minPrice);
    if(minPrice != null) this.minPrice = minPrice;
  }
  maxPriceChangedHandler(maxPrice: any )
  {
    console.log("-s-a primit max price filter panel");
    console.log(maxPrice);
    if(maxPrice != null) this.maxPrice = maxPrice;
  }
  typeChangedHandler(type:any)
  {
    console.log("-s-a primit type filter panel");
    console.log(type);
    if(type != null) this.type = type;
  }
}
