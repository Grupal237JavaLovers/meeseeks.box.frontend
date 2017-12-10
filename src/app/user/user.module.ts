import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MbProfileComponent } from './profile/profile.component';
import { MbRegisterProviderComponent } from './registerProvider/registerProvider.component';
import { MbLoginComponent } from './login/login.component';
@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    MbRegisterProviderComponent,
    MbProfileComponent,
    MbLoginComponent,
  ],
  exports: [],
  providers: [],
})
export class UserModule {
}
