/**
 * Created by csebestin on 11/10/2017.
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ConfirmValidParentMatcher, CustomValidators, errorMessages } from '../../shared/customMatcher';
import { Router } from '@angular/router';


@Component({
  selector: 'mb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class MbRegisterComponent {
  @Input() type: string; // provider or consumer
  userRegisterForm: FormGroup;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  errors = errorMessages;
  badUsernameOrEmail = '';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.userRegisterForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      realName: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
      ]],
      passwordGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.minLength(8),
        ]],
        confirmPassword: ['', [Validators.required]],
      }, {validator: CustomValidators.childrenEqual}),
      profileImage: [''],
      video: [''],
      description: [''],
    });
  }

  register(): void {
    // API call to register your provider
    const user: any = {};
    user.password = this.userRegisterForm.get('passwordGroup').get('password').value;
    user.confirmPassword = this.userRegisterForm.get('passwordGroup').get('confirmPassword').value;
    user.username = this.userRegisterForm.get('userName').value;
    user.email = this.userRegisterForm.get('email').value;
    user.name = this.userRegisterForm.get('realName').value;
    user.profileImageUrl = this.userRegisterForm.get('profileImage').value;
    user.description = this.userRegisterForm.get('description').value;
    user.profileVideoUrl = this.userRegisterForm.get('video').value;
     console.log(this.type);
    switch (this.type) {
      case 'provider':
        console.log('register provider');
        this.userService.registerProvider(user)
          .then(() => this.router.navigate(['/app/user/login']))
          .catch((err) => this.badUsernameOrEmail = 'Username or Email are already used');
        break;
      case 'consumer':
        console.log('register consumer');
        this.userService.registerConsumer(user)
          .then(() => this.router.navigate(['/app/user/login']))
          .catch((err) => this.badUsernameOrEmail = 'Username or Email are already used');
        break;
      default:
        console.log('Invalid type: ' + this.type);
    }
  }

  goToLandingPage(): void {
    this.router.navigate(['/']);
  }
}
