import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent{

  constructor(private router: Router) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      console.log('user connected', localStorage.getItem('currentUser'));
      this.router.navigate(['auth/dashboard']);
    }
  }

  goToRegisterConsumer() {
    this.router.navigate(['app/user/registerConsumer']);
  }

  goToRegisterProvider() {
    this.router.navigate(['app/user/registerProvider']);
  }
}
