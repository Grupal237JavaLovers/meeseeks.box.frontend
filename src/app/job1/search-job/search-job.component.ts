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
  search = '';

  constructor(private jobService: JobService) {
    jobService.getJobs().then(res => {
      console.log(res);
      this.jobs = res;
    });
  }

  onSubmit() {
    this.jobService.searchJobs(this.search, 1000)
      .then((res) => this.jobs = res)
      .catch((err) => console.log(err));
  }

}
