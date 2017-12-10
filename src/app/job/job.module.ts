import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { JobRoutingModule } from './job-routing.module';
import { MbCreateJobComponent } from './create-job/createJob.component';
import { JobService } from './job.service';
/**
 * Created by csebestin on 11/24/2017.
 */
@NgModule({
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule,
  ],
  declarations: [
    MbCreateJobComponent
  ],
  exports: [
  ],
  providers: [ JobService ]
})
export class JobModule {
}
