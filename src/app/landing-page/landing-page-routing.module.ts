import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page.component';
import {MbLayoutComponent} from '../layout/layout.componet';

const LANDINGPAGE_ROUTES: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: MbLayoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LANDINGPAGE_ROUTES),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class LandingPageRoutingModule {
}
