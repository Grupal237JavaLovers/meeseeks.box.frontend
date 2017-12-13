import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MbHomepageComponent } from './home/homepage.component';

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { JobModule } from './job1/job.module';
import { WildcardRoutingModule } from './not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    MbHomepageComponent,
    LandingPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutModule,
    SharedModule,
    UserModule,
    JobModule,

    WildcardRoutingModule // Last position always, do not change
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
