import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      console.log('user connected', localStorage.getItem('currentUser'));
      this.router.navigate(['auth/dashboard']);
    }
  }

  ngOnInit() {
  }

}
