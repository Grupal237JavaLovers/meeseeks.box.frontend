import { Component, Input } from '@angular/core';
import { ReviewService } from './review.service';
import { errorMessages } from '../shared/customMatcher';
import { UserService } from '../user/user.service';

@Component({
  selector: 'mb-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class MbReviewComponent {

  model: any = {
    rating: 1,
  };
  @Input() jobId;
  @Input() reviewedUserId;
  reviewErrors: any = {
    success: '',
    error: '',
  };

  errors = errorMessages;

  constructor(private reviewService: ReviewService,
              private userService: UserService) {
    this.jobId = 3;
    this.reviewedUserId = 12;
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
    this.model.date = new Date().toISOString();

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
}
