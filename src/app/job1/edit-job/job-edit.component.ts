/**
 * Created by Clusi on 1/7/2018.
 */
import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mb-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class MbJobEditComponent implements OnInit {
  id: number;
  job: any;

  constructor(private jobService: JobService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.jobService.getJobById(this.id)
      .then(res => {
        this.job = res;
      });
  }
}
