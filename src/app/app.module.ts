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
import { MbLandingPageVideoComponent } from './landing-page/landing-page-video/landing-page-video.component';
import { MbApplyJobDialogComponent } from './job1/apply-job/apply-job-dialog/apply-job-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MbHomepageComponent,
    LandingPageComponent,
    MbLandingPageVideoComponent,
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
  entryComponents: [
    MbLandingPageVideoComponent,
    MbApplyJobDialogComponent,
  ],
})
export class AppModule {
}
