import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-consumer-jobs',
  templateUrl: './consumer-jobs.component.html',
  styleUrls: ['./consumer-jobs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MbConsumerJobsComponent implements OnInit {
  jobs: any;

  constructor(private jobService: JobService,
              private router: Router) { }

  ngOnInit() {
    this.jobService.getConsumerJobs(1000)
      .then(res => {
        this.jobs = res;
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  onJobClicked(job) {
    this.router.navigate(['/auth/consumer/job/selectProvider', job.id]);
  }

}
