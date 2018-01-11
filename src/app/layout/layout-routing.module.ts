import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbHomepageComponent } from '../home/homepage.component';
import { MbProfileComponent } from '../user/profile/profile.component';
import { MbLayoutComponent } from './layout.componet';
import { AuthGuard } from '../authentification/auth.guard';
import { MbReviewComponent } from '../job1/review/review.component';
import { MbCreateJobComponent } from '../job1/create-job/createJob.component';
import { MbJobComponent } from '../job1/view-job/job.component';
import { MbJobEditComponent } from '../job1/edit-job/job-edit.component';
import { MbSearchJobComponent } from '../job1/search-job/search-job.component';
import { MbMyJobsComponent } from '../job1/my-jobs/my-jobs.component';
import { MbConsumerSelectProviderComponent } from '../job1/consumer-select-provider/consumer-select-provider.component';
import { MbMyReviewsComponent } from '../job1/review/my-reviews/my-reviews.component';

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
        component: MbSearchJobComponent,
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
        path: 'myJobs',
        component: MbMyJobsComponent,
      },
      {
        path: 'consumer/job/selectProvider/:idJob',
        component: MbConsumerSelectProviderComponent,
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
        path: 'review/:type/:idJob/:reviewedUserId',
        component: MbReviewComponent,
      },
      {
        path: 'review/myReviews',
        component: MbMyReviewsComponent,
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
