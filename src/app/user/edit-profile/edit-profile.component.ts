import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {errorMessages} from '../../shared/customMatcher';
import {UserService} from '../user.service';

@Component({
  selector: 'mb-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfileComponent {
  model: any = {
    name: this.getUser().name,
    username: this.getUser().username,
    password: '',
    confirmPassword: '',
    email: this.getUser().email,
    profileImgUrl: ''
  };
  errors = errorMessages;

  constructor(private userService: UserService) {
  }

  getUser() {
    return this.userService.getUser();
  }

  isConsumer() {
    return this.getUser().role === 'consumer';
  }

  isProvider() {
    return this.getUser().role === 'provider';
  }

  onSubmit() {
    console.log(this.model);
    // this.userService.postProfileEdit(this.model;)
  }
}
