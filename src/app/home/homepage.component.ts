/**
 * Created by csebestin on 10/23/2017.
 */
import {Component} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../model/user';

@Component({
  selector: 'mb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class MbHomepageComponent {

  constructor(private userService: UserService) {}

  getUser(): User {
    return this.userService.getUser();
  }
}
