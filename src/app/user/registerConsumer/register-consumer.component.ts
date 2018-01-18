import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mb-register-consumer',
  templateUrl: './register-consumer.component.html',
  styleUrls: ['./register-consumer.component.scss'],
})

export class MbRegisterConsumerComponent {

  constructor(private router: Router) {
  }

  goToLandingPage(): void {
    this.router.navigate(['/']);
  }
}
