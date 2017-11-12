import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MbFooterComponent } from './footer/footer.component';

import { MbHeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MbLayoutComponent } from './layout.componet';
import { SharedModule } from '../shared/shared.module';

import { NbLayoutModule } from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule.forRoot([]),
    SharedModule,
    NbLayoutModule,
  ],
  declarations: [
    MbHeaderComponent,
    MbLayoutComponent,
    MbFooterComponent
  ],
  exports: [
    MbLayoutComponent,
  ],
})
export class LayoutModule {
}
