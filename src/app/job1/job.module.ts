/**
 * Created by csebestin on 11/21/2017.
 */

import { NgModule } from '@angular/core';
import { MbJobsGridComponent } from './jobs-grid/jobs-grid.component';
import { SharedModule } from '../shared/shared.module';
import { MbCreateJobComponent } from './create-job/createJob.component';
import { JobService } from './job.service';
import { MbApplyJobDialogComponent } from './apply-job/apply-job-dialog/apply-job-dialog.component';
import { MbJobComponent } from './view-job/job.component';
import { MbJobEditComponent } from './edit-job/job-edit.component';
import { MbSearchJobComponent } from './search-job/search-job.component';
import { MbMyJobsComponent } from './my-jobs/my-jobs.component';
import { MbConsumerSelectProviderComponent } from './consumer-select-provider/consumer-select-provider.component';
import { MbRequestCardComponent } from './request-card/request-card.component';
import { MbReviewComponent } from './review/review.component';
import { ReviewService } from './review/review.service';
import { MbViewReviewComponent } from './review/view-review/view-review.component';
import { MbReviewGridComponent } from './review/review-grid/review-grid.component';
import { MbMyReviewsComponent } from './review/my-reviews/my-reviews.component';
import { MbRatingComponent } from './review/rating/rating.component';
import { JobsFilterPanelComponent } from './jobs-filter-panel/jobs-filter-panel.component';
import { CategoryFilterFieldComponent } from './jobs-filter-panel/category-filter-field/category-filter-field.component';
import { LocationFilterFieldComponent } from './jobs-filter-panel/location-filter-field/location-filter-field.component';
import { PriceFilterFieldComponent } from './jobs-filter-panel/price-filter-field/price-filter-field.component';
import { TypeFilterFieldComponent } from './jobs-filter-panel/type-filter-field/type-filter-field.component';
import { ExpirationDateFilterFieldComponent } from './jobs-filter-panel/expiration-date-filter-field/expiration-date-filter-field.component';
import { MbJobsComponent } from './jobs/jobs.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    MbJobsGridComponent,
    MbCreateJobComponent,
    MbApplyJobDialogComponent,
    MbJobComponent,
    MbJobEditComponent,
    MbSearchJobComponent,
    MbMyJobsComponent,
    MbConsumerSelectProviderComponent,
    MbRequestCardComponent,
    MbReviewComponent,
    MbViewReviewComponent,
    MbReviewGridComponent,
    MbMyReviewsComponent,
    MbRatingComponent,
    MbCreateJobComponent,
    JobsFilterPanelComponent,
    CategoryFilterFieldComponent,
    LocationFilterFieldComponent,
    PriceFilterFieldComponent,
    TypeFilterFieldComponent,
    ExpirationDateFilterFieldComponent,
    MbJobsComponent
  ],
  exports: [
    MbJobsGridComponent,
  ],
  providers: [
    JobService,
    ReviewService,
  ],
})
export class JobModule {
}
