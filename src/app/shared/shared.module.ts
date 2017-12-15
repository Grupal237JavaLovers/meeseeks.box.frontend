import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatToolbarModule,
  MatSelectModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/user.service';
import { AuthGuard } from '../authentification/auth.guard';

const sharedModules = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatGridListModule,
  MatCardModule,
  CommonModule,
  MatIconModule,
  MatSliderModule,
  MatSelectModule,
];
const sharedComponents = [];
const sharedProviders = [
  UserService,
  AuthGuard,
];
@NgModule({
  imports: [...sharedModules, BrowserAnimationsModule],
  exports: [...sharedModules, ...sharedComponents],
  declarations: [...sharedComponents],
  providers: [...sharedProviders],
})
export class SharedModule {

}
