import { HttpClient } from '@angular/common/http';
/**
 * Created by csebestin on 11/18/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class JobsService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  getJobs(user: any) {
    return this.http.post('http://meeseeksbox-staging.eu-central-1.elasticbeanstalk.com/request/latest/job', user, {
      responseType: 'text',
    }).subscribe(
      res => {
        console.log(res);
        // this.router.navigateByUrl('/logIn');
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      },
    );
  }

}
