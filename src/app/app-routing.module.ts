import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MbLayoutComponent} from './layout/layout.componet';
import {LandingPageComponent} from './landing-page/landing-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    component: MbLayoutComponent,
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
