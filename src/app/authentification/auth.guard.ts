import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      console.log(localStorage.getItem('currentUser'));
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/app/login']);
    return false;
  }
}
