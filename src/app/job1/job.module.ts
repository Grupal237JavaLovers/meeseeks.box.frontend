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
  ],
  exports: [
    MbJobsGridComponent,
    MbRatingComponent
  ],
  providers: [
    JobService,
    ReviewService,
  ],
})
export class JobModule {
}
