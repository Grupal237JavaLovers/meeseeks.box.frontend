import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from 'angular4-social-login';

@Component({
  selector: 'mb-logout',
  template: ``,
  styles: [``],
})
export class MbLogoutComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.userService.logout();
    this.authService.signOut();
    this.router.navigate(['']);
  }

}
