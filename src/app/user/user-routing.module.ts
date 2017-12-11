import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbProfileComponent } from '../user/profile/profile.component';
import { MbRegisterProviderComponent } from './registerProvider/register-provider.component';
import { MbLoginComponent } from './login/login.component';
/**
 * Created by csebestin on 11/10/2017.
 */

const USER_ROUTES: Routes = [
  {
    path: 'user',
    component: MbProfileComponent,
    children: [
      {
        path: 'register',
        component: MbRegisterProviderComponent,
      },
      {
        path: 'login',
        component: MbLoginComponent,
      },
      {
        path: '',
        component: MbProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  providers: [],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
