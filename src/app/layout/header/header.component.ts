/**
 * Created by csebestin on 10/19/2017.
 */
import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'mb-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
  ],
})
export class MbHeaderComponent {
  constructor(private userService: UserService) {}

  isConsumer(): boolean {
    return this.userService.getUser().role === 'consumer';
  }
}
