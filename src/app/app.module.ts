import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MbHomepageComponent } from './home/homepage.component';

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    MbHomepageComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
