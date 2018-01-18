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
  MatListModule,
  MatSelectModule,
  MatSliderModule,
  MatTableModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/user.service';
import { AuthGuard } from '../authentification/auth.guard';
import { MbApplyJobComponent } from '../job1/apply-job/apply-job.component';
import { RouterModule } from '@angular/router';

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
  MatTabsModule,
  CommonModule,
  MatIconModule,
  MatSliderModule,
  MatSelectModule,
  MatGridListModule,
  MatTableModule,
  MatListModule,
  RouterModule,
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
