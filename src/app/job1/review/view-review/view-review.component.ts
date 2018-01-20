import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user/user.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'mb-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MbViewReviewComponent implements OnInit {
  @Input() review: any;
  @Input() received: boolean;

  constructor(private userService: UserService,
              private reviewService: ReviewService,
              private router: Router) {
  }

  ngOnInit() {
    // this.review.date = new Date(this.review.date).toLocaleString();
  }

  isProvider() {
    return this.userService.getUser().role === 'provider';
  }

  editReview() {
    if (!this.received) {
      this.reviewService.editedReview = this.review;
      if (this.isProvider()) {
        // ToDo edit provider review wont work only when the consumer is returned from backend
        this.router.navigate(['/auth/review', 'edit', this.review.job.id, this.review.consumer.id]);
      } else {
        this.router.navigate(['/auth/review', 'edit', this.review.job.id, this.review.provider.id]);
      }
    }
  }

}
