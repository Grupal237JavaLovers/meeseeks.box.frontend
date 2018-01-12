import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MbLandingPageVideoComponent} from './landing-page-video/landing-page-video.component';
import {MatDialog} from '@angular/material';
import {setInterval} from 'timers';

@Component({
  selector: 'mb-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent {

  constructor(private router: Router,
              public dialog: MatDialog) {
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

  openDialog(): void {
    // in case intellij say here is an error, intellij is wrong
    this.dialog.open(MbLandingPageVideoComponent, {
      width: '90%',
      height: '90%'
    });
  }
}
