import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbCreateJobComponent } from './create-job/createJob.component';
/**
 * Created by csebestin on 11/24/2017.
 */
const JOB_ROUTES: Routes = [
  {
    path: 'job',
    children: [
      {
        path: '',
        redirectTo: '/job',
        pathMatch: 'full',
      },
      {
        path: 'create',
        component: MbCreateJobComponent,
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
