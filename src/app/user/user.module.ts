import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MbProfileComponent } from './profile/profile.component';
import { MbRegisterProviderComponent } from './registerProvider/registerProvider.component';
import { UserService } from './user.service';
@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    MbRegisterProviderComponent,
    MbProfileComponent,
  ],
  exports: [],
  providers: [UserService],
})
export class UserModule {
}
