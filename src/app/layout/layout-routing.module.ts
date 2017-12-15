import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbHomepageComponent } from '../home/homepage.component';
import { MbProfileComponent } from '../user/profile/profile.component';
import { MbLayoutComponent } from './layout.componet';
import { MbJobsGridComponent } from '../job1/jobs-grid/jobs-grid.component';
import { AuthGuard } from '../authentification/auth.guard';
import { MbCreateJobComponent } from '../job1/create-job/createJob.component';

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
        path: 'job/create',
        component: MbCreateJobComponent
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
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full',
      }
    ]
  }
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
