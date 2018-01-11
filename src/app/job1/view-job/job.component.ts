/**
 * Created by Clusi on 12/17/2017.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { UserService } from '../../user/user.service';
@Component({
  selector: 'mb-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class MbJobComponent implements OnInit, OnDestroy {

  displayedColumns = ['day', 'startHour', 'endHour'];
  dataSource: any;
  errors = '';
  job: any;
  request: any;
  requestId: number;
  getRequest: any;
  checkingRequestStatus = false;
  checkingGetRequestId = false;

  constructor(private route: ActivatedRoute,
              private jobService: JobService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getJob();
    this.checkRequestStateIfProvider();
    this.getRequest = setInterval(() => {
      this.checkRequestStateIfProvider();
    }, 2000);
  }

  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJobById(id)
      .then(res => {
        console.log(res);
        this.job = res;
        this.dataSource = new MatTableDataSource<Availability>(this.job.availabilities);
      });
  }

  deleteJob(id: number) {
    console.log(id);
    this.jobService.deleteJobById(id)
      .then(() => {
        this.router.navigateByUrl('/auth/jobs');
      })
      .catch((err) => {
        this.errors = 'Delete failed!';
        console.log(err);
      });
  }

  editJob(id: number) {
    console.log(id);
    console.log('/auth/job/edit/' + id);
    this.router.navigateByUrl('/auth/job/edit/' + id);
  }

  goToRequests(jobId: number) {
    this.router.navigate(['/auth/consumer/job/selectProvider', jobId]);
  }

  isMainConsumer() {
    return this.userService.getUser().username === this.job.consumer.username;
  }

  isProvider() {
    return this.userService.getUser().role === 'provider';
  }

  refreshRequest(requestId) {
    this.requestId = requestId;
    this.checkingGetRequestId = true;
    console.log(this.requestId);
  }

  checkRequestStateIfProvider() {
    if (this.requestId != null) {
      this.jobService.getRequest(this.requestId)
        .then((res) => {
          this.request = res;
          this.checkingRequestStatus = true;
        })
        .catch(err => console.log(err));
    } else {
      this.request = null;
      if (this.checkingGetRequestId) {
        this.checkingRequestStatus = true;
      }
    }
  }

  appliedToJob() {
    return this.request !== null;
  }

  providerAccepted() {
    return this.request != null && this.request.accepted;
  }

  providerMakeReview() {
    this.router.navigate(['/auth/review/create/', this.job.id, this.job.consumer.id]);
  }

  ngOnDestroy() {
    if (this.getRequest) {
      clearInterval(this.getRequest);
    }
  }
}

export interface Availability {
  day: string;
  startHour: string;
  endHour: string;
}
