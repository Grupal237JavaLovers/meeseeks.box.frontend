import { Component, ViewEncapsulation } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'mb-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MbSearchJobComponent {
  jobs: any;

  constructor(private jobService: JobService) {
    jobService.getJobs().then(res => this.jobs = res);
  }

}
