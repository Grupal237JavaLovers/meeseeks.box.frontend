import { HttpClient } from '@angular/common/http';
/**
 * Created by csebestin on 11/18/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  register(provider: any) {
    return this.http.post('http://localhost:8080/provider/register', provider, {
      responseType: 'text',
    }).subscribe(
      res => {
        console.log(res);
        // this.router.navigateByUrl('/logIn');
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('/register');
      },
    );
  }
}
