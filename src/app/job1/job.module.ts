/**
 * Created by csebestin on 11/21/2017.
 */

import { NgModule } from '@angular/core';
import { MbJobsGridComponent } from './jobs-grid/jobs-grid.component';
import { SharedModule } from '../shared/shared.module';
import { MbCreateJobComponent } from './create-job/createJob.component';
import { JobService } from './job.service';
import { JobsFilterPanelComponent } from './jobs-filter-panel/jobs-filter-panel.component';
import { CategoryFilterFieldComponent } from './jobs-filter-panel/category-filter-field/category-filter-field.component';
import { LocationFilterFieldComponent } from './jobs-filter-panel/location-filter-field/location-filter-field.component';
import { PriceFilterFieldComponent } from './jobs-filter-panel/price-filter-field/price-filter-field.component';
import { TypeFilterFieldComponent } from './jobs-filter-panel/type-filter-field/type-filter-field.component';
import { ExpirationDateFilterFieldComponent } from './jobs-filter-panel/expiration-date-filter-field/expiration-date-filter-field.component';
import { MbJobsComponent } from './jobs/jobs.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MbJobsGridComponent,
    MbCreateJobComponent,
    JobsFilterPanelComponent,
    CategoryFilterFieldComponent,
    LocationFilterFieldComponent,
    PriceFilterFieldComponent,
    TypeFilterFieldComponent,
    ExpirationDateFilterFieldComponent,
    MbJobsComponent
  ],
  exports: [],
  providers: [ JobService ],
})
export class JobModule {
}
