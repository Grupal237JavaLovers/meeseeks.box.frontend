import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { ApplicationSettings } from '../shared/applicationSettings';
/**
 * Created by csebestin on 11/24/2017.
 */

@Injectable()
export class JobService {

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  /** Craete new job */
  createJob(job: any) {

    this.http.post(`${ApplicationSettings.BASE_URL}/job/insert`, job, {
      headers: this.userService.getHeaders(),
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


  getJobs(): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/job/find/price_between/0/90000/10000`, {
      headers: this.userService.getHeaders(),
    }).toPromise()
      .then(res => res);
  }

  providerApplyToJob(jobId, message): Promise<any> {
    return this.http.post(`${ApplicationSettings.BASE_URL}/provider/apply/${jobId}/${message}`, null, {
      headers: this.userService.getHeaders(),
    }).toPromise()
      .then(res => res);
  }

  providerGetRequestsApplied(limit): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/request/latest/provider/${this.userService.getUser().id}/${limit}`, {
      headers: this.userService.getHeaders(),
    }).toPromise()
      .then(res => res);
  }

  providerUnrollFromJob(id): Promise<any> {
    return this.http.delete(`${ApplicationSettings.BASE_URL}/request/delete/${id}`, {
      headers: this.userService.getHeaders(),
      responseType: 'text',
    }).toPromise();
  }
}
