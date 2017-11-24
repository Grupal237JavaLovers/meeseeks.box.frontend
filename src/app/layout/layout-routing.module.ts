import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbHomepageComponent } from '../home/homepage.component';
import { MbProfileComponent } from '../user/profile/profile.component';
import { MbRegisterProviderComponent } from '../user/registerProvider/registerProvider.component';

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
    component: MbRegisterProviderComponent,
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
