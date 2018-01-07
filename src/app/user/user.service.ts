import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Created by csebestin on 11/18/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ApplicationSettings } from '../shared/applicationSettings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private token: null;
  private user: User;

  constructor(private http: HttpClient,
              private router: Router) {
    // set token if saved in local storage
    if (localStorage.getItem('currentUser')) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser.token;
      this.user = currentUser.user;
    }
  }

  registerProvider(provider: any): Promise<any> {
    return this.http.post(`${ApplicationSettings.BASE_URL}/provider/register`, provider, {
      responseType: 'text',
    }).toPromise()
      .then(
        res => {
          return res;
        });
  }

  registerConsumer(consumer: any): Promise<any> {
    return this.http.post(`${ApplicationSettings.BASE_URL}/consumer/register`, consumer, {
      responseType: 'text',
    }).toPromise()
      .then(
        res => {
          return res;
        });
  }

  login(user: any): Promise<any> {
    return this.http.post(`${ApplicationSettings.BASE_URL}/login`, user, {responseType: 'text'}).toPromise()
      .then(data => {
        const res = JSON.parse(data);
        if (res.token) {
          this.token = res.token;
          return this.getCurrentUser()
            .then(userData => {
              this.fromJsonToUser(userData);
              localStorage.setItem('currentUser', JSON.stringify({user: this.user, token: this.token}));
              return this.user;
            });
        }
      });
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): Promise<any> {
    return this.http.get<User>(`${ApplicationSettings.BASE_URL}/user/current`, {
      headers: this.getHeaders(),
    }).toPromise()
      .then(data => {
        return data;
      });
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
