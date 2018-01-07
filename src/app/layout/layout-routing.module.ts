import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbHomepageComponent } from '../home/homepage.component';
import { MbProfileComponent } from '../user/profile/profile.component';
import { MbLayoutComponent } from './layout.componet';
import { MbJobsGridComponent } from '../job1/jobs-grid/jobs-grid.component';
import { AuthGuard } from '../authentification/auth.guard';
import { MbReviewComponent } from '../review/review.component';
import { MbCreateJobComponent } from '../job1/create-job/createJob.component';
import { MbJobComponent } from '../job1/view-job/job.component';
import { MbJobEditComponent } from '../job1/edit-job/job-edit.component';

const LAYOUT_ROUTES: Routes = [

  {
    path: 'auth',
    component: MbLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: MbHomepageComponent,
      },
      {
        path: 'jobs',
        component: MbJobsGridComponent,
      },
      {
        path: 'job',
        children: [
          {
            path: 'edit/:id',
            component: MbJobEditComponent,
          },
          {
            path: 'create',
            component: MbCreateJobComponent,
          },
          {
            path: 'details/:id',
            component: MbJobComponent,
          },
        ],
      },
      {
        path: 'user',
        component: MbProfileComponent,
        children: [
          {
            path: '',
            redirectTo: '/user',
            pathMatch: 'full',
          },
          {
            path: 'profile',
            component: MbProfileComponent,
          },
        ],
      },
      {
        path: 'review/create',
        component: MbReviewComponent,
      },
      {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(LAYOUT_ROUTES),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class LayoutRoutingModule {
}
