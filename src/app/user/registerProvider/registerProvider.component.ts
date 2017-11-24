/**
 * Created by csebestin on 11/10/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ConfirmValidParentMatcher, CustomValidators, errorMessages } from '../../shared/customMatcher';


@Component({
  selector: 'mb-register',
  templateUrl: './registerProvider.component.html',
  styleUrls: ['./registerProvider.component.scss'],
})
export class MbRegisterProviderComponent {
  userRegisterForm: FormGroup;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  errors = errorMessages;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
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
    // this.userService.register();
    const provider: any = {};
    provider.password = this.userRegisterForm.get('passwordGroup').get('password').value;
    provider.confirmPassword = this.userRegisterForm.get('passwordGroup').get('confirmPassword').value;
    provider.username = this.userRegisterForm.get('userName').value;
    provider.email = this.userRegisterForm.get('email').value ;
    provider.name = this.userRegisterForm.get('realName').value;
    provider.profileImageUrl = this.userRegisterForm.get('profileImage').value;
    provider.description = this.userRegisterForm.get('description').value;
    provider.profileVideoUrl = this.userRegisterForm.get('video').value;
     // console.log(provider);
    this.userService.register(provider);
  }
}
