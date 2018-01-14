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

    console.log(this.category)

    localResult = !isUndefined(this.category) ? this.jobService.getJobsByCategory(this.category) : [];
    if(localResult instanceof Array) this.filterResults.push(localResult);

    localResult = (!isUndefined(this.location)) ? this.filterResults.push(this.jobService.getJobsByLocation(this.location)) : this.filterResults.push([]);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    localResult = (this.expirationDate != null) ? this.filterResults.push(this.jobService.getJobsByExpirationDate(this.expirationDate)) : this.filterResults.push([]);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    localResult = (!isUndefined(this.minPrice) && !isUndefined(this.maxPrice)) ? this.filterResults.push(this.jobService.getJobsByPriceBetween(this.minPrice, this.maxPrice)) : this.filterResults.push([]);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    localResult = (!isUndefined(this.type)) ? this.filterResults.push(this.jobService.getJobsByType(this.type)) : this.filterResults.push([]);
    if(localResult instanceof Array) this.filterResults.push(localResult);

    this.result = this.filterResults[0].concat(this.filterResults[1], this.filterResults[2], this.filterResults[3], this.filterResults[4]);
    if(this.result == [])
      this.jobService.getJobs().then(res => this.result = res);
    console.log("!!!!!!!!!!!!!!!!!!!!" + this.result);
    this.FilterResult.emit(this.result);
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
