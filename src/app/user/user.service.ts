import {HttpClient, HttpHeaders} from '@angular/common/http';
/**
 * Created by csebestin on 11/18/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../model/user';

@Injectable()
export class UserService {
  private token: null;
  private user: User;

  constructor(private http: HttpClient,
              private router: Router) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  register(provider: any) {
    return this.http.post('http://meeseeksbox-staging.eu-central-1.elasticbeanstalk.com/provider/register', provider, {
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

  login(user: any) {
    return this.http.post('http://meeseeksbox-staging.eu-central-1.elasticbeanstalk.com/login', user, {
      responseType: 'text',
    }).subscribe(
      res => {
        const data = JSON.parse(res);
        if (data.token) {
          this.token = data.token;
          localStorage.setItem('currentUser', JSON.stringify({ user: this.user, token: this.token }));
        }
        this.getCurrentUser();
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      },
    );
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return this.http.get<User>('http://meeseeksbox-staging.eu-central-1.elasticbeanstalk.com/user/current', {
      headers: this.getHeaders()
    }).subscribe(
      data => {
        this.fromJsonToUser(data);
        console.log(this.user);
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      },
    );
  }

  fromJsonToUser(data) {
    this.user = new User();
    this.user.id = data.id;
    this.user.username = data.username;
    this.user.created = data.created;
    this.user.name = data.name;
    this.user.role = data.role;
    this.user.email = data.email;
  }

  getHeaders() {
    return new HttpHeaders().set('Authorization', this.token);
  }

  getUser() {
    return this.user;
  }

  getToken() {
    return this.token;
  }
}
