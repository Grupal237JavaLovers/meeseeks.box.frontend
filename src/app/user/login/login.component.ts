import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from '../../shared/customMatcher';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class MbLoginComponent implements OnInit {
  userLoginForm: FormGroup;

  errors = errorMessages;
  badCredentials = '';

  clickedOnSocialButtons = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private authService: AuthService) {
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

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log('login', user);
      if (user != null && this.clickedOnSocialButtons) {
        this.clickedOnSocialButtons = false;
        this.userService.socialLogin(user)
          .then((res) => {
            console.log('user connected', res);
            this.router.navigate(['/auth/dashboard']);
          })
          .catch((err) => {
            this.badCredentials = 'Maybe you are not registered, or your email is used for other account';
            console.log(err);
            this.signOut();
          });
      }
    });
  }

  goToLandingPage(): void {
    this.router.navigate(['/']);
  }

  signInWithGoogle(): void {
    this.clickedOnSocialButtons = true;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.clickedOnSocialButtons = true;
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
