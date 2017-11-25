import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from '../../shared/customMatcher';
import { UserService } from '../user.service';

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class MbLoginComponent {
  userLoginForm: FormGroup;

  errors = errorMessages;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
    this.createForm();
  }

  createForm() {
    this.userLoginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    // API call to login your provider
    const user: any = {};
    user.password = this.userLoginForm.get('password').value;
    user.username = this.userLoginForm.get('userName').value;
    this.userService.login(user);
  }
}
