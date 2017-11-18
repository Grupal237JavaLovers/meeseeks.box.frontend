import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const sharedModules = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];
const sharedComponents = [];
@NgModule({
  imports: [...sharedModules, BrowserAnimationsModule],
  exports: [...sharedModules, ...sharedComponents],
  declarations: [...sharedComponents],
})
export class SharedModule {

}
