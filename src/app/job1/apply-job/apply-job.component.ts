import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../user/user.service';
import { MatDialog } from '@angular/material';
import { MbApplyJobDialogComponent } from './apply-job-dialog/apply-job-dialog.component';
import { JobService } from '../job.service';
import _ from 'lodash';

@Component({
  selector: 'mb-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MbApplyJobComponent implements OnInit {
  request = {
    id: -1,
    applied: false,
  };
  user: User;
  @Input() job: any;

  constructor(private userService: UserService,
              private jobService: JobService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    if (this.isProvider()){
      this.checkIfAlreadyApplied();
    }
  }

  checkIfAlreadyApplied() {
    this.jobService.providerGetRequestsApplied(1000)
      .then((res) => {
        _.forEach(res, (request) => {
          if (request.job.id === this.job.id) {
            this.request.applied = true;
            this.request.id = request.id;
          }
        });
      })
      .catch((err) => console.log(err));
  }

  unroll() {
    this.jobService.providerUnrollFromJob(this.request.id)
      .then(() => {
        this.request.applied = false;
      })
      .catch((err) => console.log(err));
  }

  applied() {
    return this.request.applied;
  }

  isProvider() {
    return this.user.role === 'provider';
  }

  openDialog(): void {
    // in case intellij say here is an error, intellij is wrong
    console.log(this.job);
    const dialogRef = this.dialog.open(MbApplyJobDialogComponent, {
      data: {
        jobId: this.job.id,
      },
      width: '20%',
      height: '20%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.request.applied = true;
        this.checkIfAlreadyApplied();
      }
    });
  }
}
