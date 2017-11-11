/**
 * Created by csebestin on 11/10/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'mb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class MbRegisterComponent {
  model: any = {};
  onSubmit() {
    console.log(this.model);
  }
}
