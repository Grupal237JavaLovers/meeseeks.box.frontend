import { Component } from '@angular/core';

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class MbLoginComponent {

  model: any = {};
  onSubmit() {
    console.log(this.model);
  }
}
