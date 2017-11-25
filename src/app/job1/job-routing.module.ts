import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbJobsGridComponent } from './jobs-grid/jobs-grid.component';
/**
 * Created by csebestin on 11/21/2017.
 */
const JOB_ROUTES: Routes = [
  {
    path: 'job',
    component: MbJobsGridComponent,
    children: [
      {
        path: '',
        redirectTo: 'job',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(JOB_ROUTES),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class JobRoutingModule {
}
