import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MbProfileComponent } from './profile/profile.component';
import { MbRegisterProviderComponent } from './registerProvider/register-provider.component';
import { MbLoginComponent } from './login/login.component';
import { MbRegisterConsumerComponent } from './registerConsumer/register-consumer.component';
import { MbRegisterComponent } from './register/register.component';
@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    MbRegisterProviderComponent,
    MbProfileComponent,
    MbLoginComponent,
    MbRegisterConsumerComponent,
    MbRegisterComponent,
  ],
  exports: [],
  providers: [],
})
export class UserModule {
}
