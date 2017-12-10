import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Created by csebestin on 11/24/2017.
 */

@Injectable()
export class JobService {
  private baseUrl = 'http://localhost:8080/job';

  constructor(private http: HttpClient) {
  }

  /** Craete new job */
  createJob(job: any) {
    /* get this from userService after is implemet the method getToken */
    const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYyIsImV4cCI6MTUyMDgyMzIzN30.' +
      'v3V2goB2oUUnByTrfyaovqk76plBNGx2_Qx8rFGINzOX_-8KBnyJlE-WM1P8xdqr6RfeP0uwdBKeu5Q3Q2fEIA';
    const url = this.baseUrl + '/insert';
    console.log(url);

    this.http.post(url, job, {
      responseType: 'text',
      headers: new HttpHeaders().set('Authorization', token)
    }).subscribe(
      res => {
        console.log(res);
        // this.router.navigateByUrl('/logIn');
      },
      err => {
        console.log(err);
        // this.router.navigateByUrl('/register');
      },
    );
  }
}
