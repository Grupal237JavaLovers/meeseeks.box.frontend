/**
 * Created by csebestin on 11/24/2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { errorMessages } from '../../shared/customMatcher';
import { JobService } from '../job.service';

@Component({
  selector: 'mb-create-job',
  templateUrl: './createJob.component.html',
  styleUrls: [
    './createJob.component.scss',
  ],
})
export class MbCreateJobComponent implements OnInit {
  @Input() job: any;
  model: any = {
    availabilities: [],
    category: '',
    job: {},
  };
  errors = errorMessages;

  days = [
    {value: 'monday', viewValue: 'Monday'},
    {value: 'tuesday', viewValue: 'Tuesday'},
    {value: 'wednesday', viewValue: 'Wednesday'},
    {value: 'thursday', viewValue: 'Thursday'},
    {value: 'friday', viewValue: 'Friday'},
    {value: 'saturday', viewValue: 'Satrday'},
    {value: 'sunday', viewValue: 'Sunday'},
  ];

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    if (this.job) {
      this.model = this.job;
    }
  }

  onSubmit() {
    /*this.model.availabilities.forEach(availability => {
     availability.startHour = availability.startHour + ':00';
     availability.endHour = availability.endHour + ':00';
     });
     console.log(this.model);*/
    if (this.job) {
      this.jobService.updateJob(this.model);
    } else {
      this.jobService.createJob(this.model);
    }
  }

  addAvailability() {
    this.model.availabilities.push({
      day: '',
      startHour: '',
      endHour: '',
    });
  }

  deleteAvailability() {
    this.model.availabilities.splice(-1, 1);
  }
}
