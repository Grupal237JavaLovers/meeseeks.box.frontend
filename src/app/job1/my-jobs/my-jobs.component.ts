import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from '../job.service';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'mb-consumer-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MbMyJobsComponent implements OnInit {
  jobs: any;

  constructor(private jobService: JobService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    switch (this.userService.getUser().role) {
      case 'provider':
        this.jobService.getProviderJobs(1000)
          .then(res => {
            this.jobs = res;
            console.log(res);
          })
          .catch(err => console.log(err));
        break;
      default:
        this.jobService.getConsumerJobs(1000)
          .then(res => {
            this.jobs = res;
            console.log(res);
          })
          .catch(err => console.log(err));
    }

  }

  onJobClicked(job) {
    this.router.navigate(['/auth/job/details/', job.id]);
  }

}
