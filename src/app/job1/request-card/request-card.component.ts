import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MbRequestCardComponent implements OnInit {
  @Input() request: any;

  constructor(private jobService: JobService,
              private router: Router ) {
  }

  ngOnInit() {
    const date = new Date(this.request.date);
    this.request.date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  acceptRequest() {
    this.jobService.acceptRequest(this.request.job.id, this.request.provider.id)
      .then(() => this.request.accepted = true);
  }

  makeReview() {
    this.router.navigate(['/auth/review/create/', this.request.job.id, this.request.provider.id]);
  }

}
