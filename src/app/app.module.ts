import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { MbHomepageComponent } from './home/homepage.component';
import { MbProfileComponent } from './user/profile/profile.component';
import { SharedModule } from './shared/shared.module';
import { MbRegisterComponent } from './user/register/register.component';
import { MbLoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MbHomepageComponent,
    MbProfileComponent,
    MbRegisterComponent,
    MbLoginComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
