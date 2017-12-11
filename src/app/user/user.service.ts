import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Created by csebestin on 11/18/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ApplicationSettings } from '../shared/applicationSettings';

@Injectable()
export class UserService {
  private token: null;
  private user: User;

  constructor(private http: HttpClient,
              private router: Router) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token;
    this.user = currentUser.user;
  }

  registerProvider(provider: any) {
    return this.http.post(`${ApplicationSettings.BASE_URL}/provider/register`, provider, {
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

  registerConsumer(provider: any) {
    return this.http.post(`${ApplicationSettings.BASE_URL}/consumer/register`, provider, {
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
    return this.http.post(`${ApplicationSettings.BASE_URL}/login`, user, {
      responseType: 'text',
    }).subscribe(
      res => {
        const data = JSON.parse(res);
        if (data.token) {
          this.token = data.token;
          this.getCurrentUser();
        }
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
      headers: this.getHeaders(),
    }).subscribe(
      data => {
        this.fromJsonToUser(data);
        localStorage.setItem('currentUser', JSON.stringify({user: this.user, token: this.token}));
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
