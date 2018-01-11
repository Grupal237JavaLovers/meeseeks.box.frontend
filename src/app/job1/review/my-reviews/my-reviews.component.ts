import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../../user/user.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'mb-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MbMyReviewsComponent implements OnInit {
  receivedReviews: any;
  sendReviews: any;

  constructor(private reviewService: ReviewService,
              private userService: UserService) {}

  ngOnInit() {
    switch (this.userService.getUser().role) {
      case 'provider':
        this.reviewService.getReviewsProvider(this.userService.getUser().id, true, 1000)
          .then(res => {
            this.receivedReviews = res;
            console.log(res);
          })
          .catch(err => console.log(err));
        this.reviewService.getReviewsProvider(this.userService.getUser().id, false, 1000)
          .then(res => this.sendReviews = res)
          .catch(err => console.log(err));
        break;
      default:
        this.reviewService.getReviewsConsumer(this.userService.getUser().id, true, 1000)
          .then(res => {
            this.receivedReviews = res;
            console.log(res);
          })
          .catch(err => console.log(err));
        this.reviewService.getReviewsConsumer(this.userService.getUser().id, false, 1000)
          .then(res => this.sendReviews = res)
          .catch(err => console.log(err));
    }
  }

}
