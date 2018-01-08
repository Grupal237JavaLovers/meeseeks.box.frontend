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
  createJob(job: any): Promise<any> {

    return this.http.post(`${ApplicationSettings.BASE_URL}/job/insert`, job, {
      headers: this.userService.getHeaders(),
    }).toPromise();
  }

  searchJobs(criteria: string, limit: number): Promise<any> {
    if (criteria === '') {
      criteria = null;
    }
    return this.http.get(`${ApplicationSettings.BASE_URL}/job/search/${criteria}/${limit}`, {
      headers: this.userService.getHeaders()
    }).toPromise()
      .then(res => res);
  }

  getJobs(): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/job/find/price_between/0/90000/10000`, {
      headers: this.userService.getHeaders()
    }).toPromise()
      .then(res => res);
  }

  /** Get job by id*/
  getJobById(id: number): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/job/${id}`, {
      headers: this.userService.getHeaders(),
    }).toPromise()
      .then(res => res);
  }

  /**Delete job by id*/
  deleteJobById(id: number): Promise<any> {
    return this.http.delete(`${ApplicationSettings.BASE_URL}/job/delete/${id}`, {
      headers: this.userService.getHeaders(),
      responseType: 'text',
    }).toPromise();
  }

  /**Update job*/
  updateJob(job: any): Promise<any> {
    return this.http.put(`${ApplicationSettings.BASE_URL}/job/update`, job, {
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

  getConsumerJobs(limit: number): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/job/latest/consumer/${limit}`, {
      headers: this.userService.getHeaders()
    }).toPromise()
      .then(res => res);
  }

  getProviderJobs(limit: number): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/job/latest/provider/${limit}`, {
      headers: this.userService.getHeaders()
    }).toPromise()
      .then(res => res);
  }

  getRequestsForJob(idJob: number, limit: number): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/request/latest/job/${idJob}/${limit}`, {
      headers: this.userService.getHeaders()
    }).toPromise()
      .then(res => res);
  }

  acceptRequest(idJob, idProvider): Promise<any> {
    return this.http.post(`${ApplicationSettings.BASE_URL}/consumer/accept/${idJob}/${idProvider}`, null, {
      headers: this.userService.getHeaders()
    }).toPromise();
  }

  getRequest(id: number) {
    return this.http.get(`${ApplicationSettings.BASE_URL}/request/get/${id}`, {
      headers: this.userService.getHeaders()
    }).toPromise()
      .then(res => res);
  }


}
