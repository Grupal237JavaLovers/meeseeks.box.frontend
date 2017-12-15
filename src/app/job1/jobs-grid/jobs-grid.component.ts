/**
 * Created by csebestin on 11/21/2017.
 */
import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'mb-jobs-grid',
  templateUrl: './jobs-grid.component.html',
  styleUrls: ['./jobs-grid.component.scss'],
})
export class MbJobsGridComponent {
  jobs: any = [];

  constructor(private jobService: JobService) {
    jobService.getJobs().then(res => this.jobs = res);
  }
}
