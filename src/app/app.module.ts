import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { MbHomepageComponent } from './home/homepage.component';
import { MbProfileComponent } from './user/profile/profile.component';
import { SharedModule } from './shared/shared.module';
import { MbRegisterComponent } from './user/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MbLayoutComponent} from './layout/layout.componet';

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
  declarations: [
    AppComponent,
    MbHomepageComponent,
    MbProfileComponent,
    MbRegisterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
