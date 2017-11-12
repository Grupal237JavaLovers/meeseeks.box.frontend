import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbHomepageComponent } from '../home/homepage.component';
import { MbProfileComponent } from '../user/profile/profile.component';
import { MbRegisterComponent } from '../user/register/register.component';
import { MbLoginComponent } from '../user/login/login.component';

const LAYOUT_ROUTES: Routes = [
  {
    path: 'home',
    component: MbHomepageComponent,
  },
  {
    path: 'profile',
    component: MbProfileComponent,
  },
  {
    path: 'register',
    component: MbRegisterComponent
  },
  {
    path: 'login',
    component: MbLoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
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
