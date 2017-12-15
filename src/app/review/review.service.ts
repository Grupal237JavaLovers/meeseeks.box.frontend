import { HttpClient } from '@angular/common/http';
/**
 * Created by mtoader on 11/18/2017.
 */
import { Injectable } from '@angular/core';
import { ApplicationSettings } from '../shared/applicationSettings';
import { UserService } from '../user/user.service';

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  createReview(review: any, idJob, idUserReviewed, type): Promise<any> {
    return this.http.post(`${ApplicationSettings.BASE_URL}/review/insert/${idJob}/${type}/${idUserReviewed}`, review,
      {headers: this.userService.getHeaders()}).toPromise()
      .then(
        res => {
          return res;
        });
  }

}
