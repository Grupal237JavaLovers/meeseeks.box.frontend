import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbHomepageComponent } from '../home/homepage.component';
import { MbProfileComponent } from '../user/profile/profile.component';
import { MbRegisterProviderComponent } from '../user/registerProvider/register-provider.component';
import { MbLoginComponent } from '../user/login/login.component';
import { MbLayoutComponent } from './layout.componet';
import { MbJobsGridComponent } from '../job1/jobs-grid/jobs-grid.component';
import { MbRegisterConsumerComponent } from '../user/registerConsumer/register-consumer.component';
import { AuthGuard } from '../authentification/auth.guard';

const LAYOUT_ROUTES: Routes = [

  {
    path: 'app',
    component: MbLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: MbHomepageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'jobs',
        component: MbJobsGridComponent,
      },
      {
        path: 'login',
        component: MbLoginComponent,
      },
      {
        path: 'user',
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
          {
            path: 'registerConsumer',
            component: MbRegisterConsumerComponent,
          },
          {
            path: 'registerProvider',
            component: MbRegisterProviderComponent,
          },
        ]
      },
      {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full',
      }
    ]
  },
  /* {
   path: 'home/profile',
   component: MbProfileComponent,
   },
   {
   path: 'home/register',
   component: MbRegisterProviderComponent,
   },
   {
   path: 'home/login',
   component: MbLoginComponent,
   }*/
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
