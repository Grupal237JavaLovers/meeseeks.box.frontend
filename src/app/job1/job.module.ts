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

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    MbJobsGridComponent,
    MbCreateJobComponent,
    MbApplyJobDialogComponent,
    MbJobComponent,
  ],
  exports: [],
  providers: [JobService],
})
export class JobModule {
}
