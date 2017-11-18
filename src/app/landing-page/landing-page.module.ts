import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LandingPageRoutingModule} from './landing-page-routing.module';
import {LayoutModule} from '../layout/layout.module';
import {MbLayoutComponent} from '../layout/layout.componet';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    LandingPageRoutingModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    MbLayoutComponent
  ],
  exports: [
    MbLayoutComponent,
  ]
})
export class LandingPageModule { }
