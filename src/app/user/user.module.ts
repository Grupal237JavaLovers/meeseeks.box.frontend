import { NgModule } from '@angular/core';
import { MbRegisterComponent } from './register/register.component';
import { MbProfileComponent } from './profile/profile.component';
import { MbLoginComponent } from './login/login.component';
@NgModule({
  imports: [],
  declarations: [
    MbRegisterComponent,
    MbProfileComponent,
    MbLoginComponent,
  ],
  exports: [],
})
export class UserLayout {
}
