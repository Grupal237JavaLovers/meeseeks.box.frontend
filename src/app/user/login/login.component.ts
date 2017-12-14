import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from '../../shared/customMatcher';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class MbLoginComponent {
  userLoginForm: FormGroup;

  errors = errorMessages;
  badCredentials = '';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
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
    this.userService.login(user)
      .then((userData) => {
        console.log('user connected', userData);
        this.router.navigate(['/auth/dashboard']);
      })
      .catch(() => {
        this.badCredentials = 'Username or password incorrect';
      });
  }

  goToLandingPage(): void {
    this.router.navigate(['/']);
  }
}
