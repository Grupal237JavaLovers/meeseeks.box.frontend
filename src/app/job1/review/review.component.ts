import { Component } from '@angular/core';
import { ReviewService } from './review.service';
import { errorMessages } from '../../shared/customMatcher';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mb-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class MbReviewComponent {

  model: any = {
    rating: 1,
  };
  reviewId: number;
  jobId: number;
  reviewedUserId: number;
  reviewErrors: any = {
    success: '',
    error: '',
  };
  type: string;

  errors = errorMessages;

  constructor(private reviewService: ReviewService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {

    this.route.params.subscribe(params => {
      this.jobId = params.idJob;
      this.reviewedUserId = params.reviewedUserId;
      this.type = params.type;
      if (this.type === 'edit') {
        this.model.rating = this.reviewService.editedReview.rating;
        this.model.message = this.reviewService.editedReview.message;
        this.reviewId = this.reviewService.editedReview.id;
        console.log(this.reviewService.editedReview);
      } else if (this.type !== 'create') {
        this.router.navigate(['/404']);
      }
    });
  }

  onSubmit() {
    let type;
    switch (this.userService.getUser().role) {
      case 'provider':
        type = 'consumer';
        break;
      case 'consumer':
        type = 'provider';
    }
    switch (this.type) {
      case 'create':
        this.createReview(type);
        break;
      default:
          this.editReview(type);
    }
  }

  createReview(type) {
    if (this.jobId === undefined) {
      this.reviewErrors.success = '';
      this.reviewErrors.error = 'Invalid job';
    } else if (this.reviewedUserId === undefined) {
      this.reviewErrors.success = '';
      this.reviewErrors.error = 'Invalid reviewed user';
    } else {
      this.reviewService
        .createReview(this.model, this.jobId, this.reviewedUserId, type)
        .then(() => {
          this.reviewErrors.success = 'Review created';
          this.reviewErrors.error = '';
        })
        .catch((err) => {
          console.log(err);
          this.reviewErrors.success = '';
          this.reviewErrors.error = 'Review could not been created';
        });
    }
  }

  editReview(type) {
    this.reviewService.updateReview(this.reviewId, this.model, type)
      .then((res) => {
        console.log(res);
        this.reviewErrors.success = 'Review edited';
        this.reviewErrors.error = '';
      })
      .catch((err) => {
        console.log(err);
        this.reviewErrors.success = '';
        this.reviewErrors.error = 'Review could not been edited';
      });
  }
}
