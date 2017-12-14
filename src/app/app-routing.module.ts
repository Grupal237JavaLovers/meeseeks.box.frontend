import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MbRegisterConsumerComponent } from './user/registerConsumer/register-consumer.component';
import { MbRegisterProviderComponent } from './user/registerProvider/register-provider.component';
import { MbLoginComponent } from './user/login/login.component';
import { MbLogoutComponent } from './user/logout/logout.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'app/user',
    children: [
      {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full',
      },
      {
        path: 'registerConsumer',
        component: MbRegisterConsumerComponent,
      },
      {
        path: 'registerProvider',
        component: MbRegisterProviderComponent,
      },
      {
        path: 'login',
        component: MbLoginComponent,
      },
      {
        path: 'logout',
        component: MbLogoutComponent
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
