/**
 * Created by csebestin on 11/21/2017.
 */

import { NgModule } from '@angular/core';
import { MbJobsGridComponent } from './jobs-grid/jobs-grid.component';
import { JobRoutingModule } from './job-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    JobRoutingModule,
    SharedModule
  ],
  declarations: [
    MbJobsGridComponent
  ],
  exports: [],
  providers: [],
})
export class JobModule {
}
