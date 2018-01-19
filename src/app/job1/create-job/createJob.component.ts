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
  @Input() jobId: any;
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
    {value: 'saturday', viewValue: 'Saturday'},
    {value: 'sunday', viewValue: 'Sunday'},
  ];

  types = [
    {value: 'fullTime', viewValue: 'Full time'},
    {value: 'partTime', viewValue: 'Part time'},
    {value: 'volunteer', viewValue: 'Volunteer'},
  ];

  message = '';

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    if (this.jobId) {
      this.jobService.getJobById(this.jobId)
        .then((res) => {
          console.log(res);
          this.model.job.name = res.name;
          this.model.job.description = res.description;
          this.model.job.location = res.location;
          this.model.job.type = res.type;
          this.model.job.category = res.category;
          this.model.job.price = res.price;
          if (res.expiration) {
            this.model.job.expiration = new Date(res.expiration).toISOString().split('.')[0];
          }
          this.model.category = res.category.name;
          this.model.availabilities = res.availabilities;
        })
        .catch((err) => console.log(err));
    }
  }

  onSubmit() {
    this.model.availabilities.forEach(availability => {
      if (availability.startHour.split(':').length < 3) {
        availability.startHour = availability.startHour + ':00';
        availability.endHour = availability.endHour + ':00';
      }
    });
    if (this.model.job.expiration.split(':').length < 3) {
      this.model.job.expiration += ':00';
    }
    if (this.jobId) {
      this.jobService.updateJob(this.model)
        .catch(err => console.log(err));
    } else {
      this.jobService.createJob(this.model)
        .then((res) => {
          this.message = 'Job ' + res.name + ' created with succes';
        })
        .catch((err) => {
          this.message = '';
        });
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
