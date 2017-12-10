/**
 * Created by csebestin on 11/24/2017.
 */
import { Component } from '@angular/core';
import { errorMessages } from '../../shared/customMatcher';
import { JobService } from '../job.service';

@Component({
  selector: 'mb-create-job',
  templateUrl: './createJob.component.html',
  styleUrls: [
    './createJob.component.scss',
  ],
})
export class MbCreateJobComponent {
  model: any = {};
  errors = errorMessages;

  constructor(private jobService: JobService) {
  }

  onSubmit() {
    console.log(this.model);
    this.jobService.createJob(this.model);
  }
}
