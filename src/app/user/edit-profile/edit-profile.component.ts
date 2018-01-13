import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {errorMessages} from '../../shared/customMatcher';
import {UserService} from '../user.service';
import {User} from '../../model/user';

@Component({
  selector: 'mb-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfileComponent {
  user = this.getUser();
  profileImgUrl: string;
  profileVideoUrl: string;
  description: string;
  model: any = {
    name: this.user.name,
    username: this.user.username,
    password: '',
    confirmPassword: '',
    email: this.user.email,
    description: '',
    profileImgUrl: '',
    profileVideoUrl: '',
    role: ''
  };
  errors = errorMessages;

  constructor(private userService: UserService) {
    this.user = this.getUser();
  }

  getUser() {
    if (this.isConsumer()) {
      this.userService.findConsumerById(this.user.id)
        .then( res => {
          this.model.profileImgUrl = res.profileImageUrl;
          this.model.role = 'consumer';
        });
    } else {
      if (this.isProvider()) {
       this.userService.findProviderById(this.user.id)
         .then( res => {
           this.model.profileImgUrl = res.profileImageUrl;
           this.model.profileVideoUrl = res.profileVideoUrl;
           this.model.description = res.description;
           this.model.role = 'provider';
         });
      }
    }
    return this.userService.getUser();
  }

  isConsumer() {
    if (this.user) {
      return this.user.role === 'consumer';
    }
  }

  isProvider() {
    if (this.user) {
      return this.user.role === 'provider';
    }
  }

  onSubmit() {
    console.log(this.model);
    this.userService.postProfileEdit(this.model);
  }
}
