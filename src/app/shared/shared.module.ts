import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/user.service';
import { AuthGuard } from '../authentification/auth.guard';
import { MbApplyJobComponent } from '../job1/apply-job/apply-job.component';

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
  MatDialogModule,
];
const sharedComponents = [
  MbApplyJobComponent,
];
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
