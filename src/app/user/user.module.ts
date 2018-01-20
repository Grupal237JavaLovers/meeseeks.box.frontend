import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MbProfileComponent } from './profile/profile.component';
import { MbRegisterProviderComponent } from './registerProvider/register-provider.component';
import { MbLoginComponent } from './login/login.component';
import { MbRegisterConsumerComponent } from './registerConsumer/register-consumer.component';
import { MbRegisterComponent } from './register/register.component';
import { MbLogoutComponent } from './logout/logout.component';
import {JobModule} from '../job1/job.module';


@NgModule({
  imports: [
    SharedModule,
    JobModule
  ],
  declarations: [
    MbRegisterProviderComponent,
    MbProfileComponent,
    MbLoginComponent,
    MbRegisterConsumerComponent,
    MbRegisterComponent,
    MbLogoutComponent,
  ],
  exports: [],
  providers: [],
})
export class UserModule {
}
