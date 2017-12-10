import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MbLayoutComponent} from './layout/layout.componet';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {MbProfileComponent} from './user/profile/profile.component';
import {MbRegisterProviderComponent} from './user/registerProvider/registerProvider.component';
import {MbHomepageComponent} from './home/homepage.component';
import {MbLoginComponent} from './user/login/login.component';
import {MbJobsGridComponent} from './job1/jobs-grid/jobs-grid.component';
import {AuthGuard} from './authentification/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    component: MbLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: MbHomepageComponent,
      },
      {
        path: 'profile',
        component: MbProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'register',
        component: MbRegisterProviderComponent,
      },
      {
        path: 'login',
        component: MbLoginComponent,
      },
      {
        path: 'job',
        component: MbJobsGridComponent,
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
