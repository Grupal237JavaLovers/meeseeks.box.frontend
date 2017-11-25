import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbHomepageComponent } from '../home/homepage.component';
import { MbProfileComponent } from '../user/profile/profile.component';
import { MbRegisterProviderComponent } from '../user/registerProvider/registerProvider.component';
import { MbLoginComponent } from '../user/login/login.component';

const LAYOUT_ROUTES: Routes = [
  {
    path: 'home',
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
  {
    path: 'home/login',
    component: MbLoginComponent,
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
