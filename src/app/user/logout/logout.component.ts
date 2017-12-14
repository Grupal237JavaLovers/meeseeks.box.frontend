import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-logout',
  template: ``,
  styles: [``],
})
export class MbLogoutComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
