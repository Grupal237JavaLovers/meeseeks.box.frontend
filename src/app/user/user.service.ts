import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Created by csebestin on 11/18/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ApplicationSettings } from '../shared/applicationSettings';
import {Provider} from '../model/provider';
import {Consumer} from '../model/consumer';

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

  getProvider(id: number): Promise<any> {
    return this.http.get<Provider>(`${ApplicationSettings.BASE_URL}/provider/get/${id}`, {
      headers: this.getHeaders(),
    }).toPromise()
      .then(data => {
        return data;
    });
  }

  getConsumer(id: number): Promise<any> {
    return this.http.get<Consumer>(`${ApplicationSettings.BASE_URL}/consumer/get/${id}`, {
      headers: this.getHeaders(),
    }).toPromise()
      .then(data => {
        return data;
      });
  }

  getProviderSkills(id: number): Promise<any> {
    return this.http.get<string[]>(`${ApplicationSettings.BASE_URL}/provider/get/${id}/skills`, {
      headers: this.getHeaders(),
    }).toPromise()
      .then(data => {
        return data;
      });
  }

  getProviderRating(id: number): Promise<any> {
    return this.http.get<any>(`${ApplicationSettings.BASE_URL}/review/latest/provider/${id}/1000/true`, {
      headers: this.getHeaders(),
    }).toPromise()
      .then(data => {
        let sum = 0;
        let nr = 0;
        data.forEach(review => {
          sum += review.rating;
          nr++;
        });
        return sum / nr;
      });
  }

  getConsumerRating(id: number): Promise<any> {
    return this.http.get<any>(`${ApplicationSettings.BASE_URL}/review/latest/consumer/${id}/1000/true`, {
      headers: this.getHeaders(),
    }).toPromise()
      .then(data => {
        let sum = 0;
        let nr = 0;
        data.forEach(review => {
          sum += review.rating;
          nr++;
        });
        return sum / nr;
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

  socialRegister(userFromSocial: any, type: string): Promise<any> {
    const user = {
      username: userFromSocial.email,
      name: userFromSocial.name,
      email: userFromSocial.email,
      password: userFromSocial.id,
      confirmPassword: userFromSocial.id,
      profileImageUrl: userFromSocial.photoUrl,
    };

    if (type === 'consumer') {
      return this.registerConsumer(user);
    }
    return this.registerProvider(user);
  }

  socialLogin(userFromSocial: any): Promise<any> {
    const user = {
      username: userFromSocial.email,
      password: userFromSocial.id,
    };
    return this.login(user);
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

  isUserConnected() {
    return this.getUser() != null;
  }
}
