import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mb-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.scss'],
})

export class MbRegisterProviderComponent {

  constructor(private router: Router) {
  }

  goToLandingPage(): void {
    this.router.navigate(['/']);
  }
}
