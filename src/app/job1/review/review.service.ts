import { HttpClient } from '@angular/common/http';
/**
 * Created by mtoader on 11/18/2017.
 */
import { Injectable } from '@angular/core';
import { ApplicationSettings } from '../../shared/applicationSettings';
import { UserService } from '../../user/user.service';

@Injectable()
export class ReviewService {
  editedReview: any;

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

  getReviewsProvider(idProvider: number, received: boolean, limit: number): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/review/latest/provider/${idProvider}/${limit}/${received}`, {
      headers: this.userService.getHeaders()
    }).toPromise()
      .then(res => res);
  }

  getReviewsConsumer(idConsumer: number, received: boolean, limit: number): Promise<any> {
    return this.http.get(`${ApplicationSettings.BASE_URL}/review/latest/consumer/${idConsumer}/${limit}/${received}`, {
      headers: this.userService.getHeaders()
    }).toPromise()
      .then(res => res);
  }

  updateReview(id, review, type) {
    return this.http.post(`${ApplicationSettings.BASE_URL}/review/update/${type}/${id}?rating=${review.rating}&message=${review.message}`, null, {
      headers: this.userService.getHeaders(),
      responseType: 'text',
    }).toPromise();
  }
}
