import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MbLayoutComponent} from './layout/layout.componet';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {MbProfileComponent} from './user/profile/profile.component';
import {MbRegisterProviderComponent} from './user/registerProvider/registerProvider.component';
import {MbHomepageComponent} from './home/homepage.component';

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
        component: MbHomepageComponent,
      },
      {
        path: 'home/profile',
        component: MbProfileComponent,
      },
      {
        path: 'home/register',
        component: MbRegisterProviderComponent,
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
