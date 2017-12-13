import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class WildcardRoutingModule { }
