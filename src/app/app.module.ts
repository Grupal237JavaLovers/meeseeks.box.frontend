import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MbHomepageComponent } from './home/homepage.component';

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MbLayoutComponent} from './layout/layout.componet';
import {MbProfileComponent} from './user/profile/profile.component';

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
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule,
    UserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
