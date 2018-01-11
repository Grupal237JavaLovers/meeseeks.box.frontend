import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
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
  @Output() requestSent = new EventEmitter<any>();

  constructor(private userService: UserService,
              private jobService: JobService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    if (this.isProvider()) {
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
            this.requestSent.emit(this.request.id);
          }
        });
        if (this.request.id === -1) {
          this.requestSent.emit(null);
        }
      })
      .catch((err) => console.log(err));
  }

  unroll(event) {
    event.stopPropagation();
    this.jobService.providerUnrollFromJob(this.request.id)
      .then(() => {
        this.request.applied = false;
        this.requestSent.emit(null);
      })
      .catch((err) => console.log(err));
  }

  applied() {
    return this.request.applied;
  }

  isProvider() {
    return this.user.role === 'provider';
  }

  openDialog(event): void {
    // in case intellij say here is an error, intellij is wrong
    event.stopPropagation();
    console.log(this.job);
    const dialogRef = this.dialog.open(MbApplyJobDialogComponent, {
      data: {
        jobId: this.job.id,
      },
      width: '400px',
      height: '160px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.request.applied = true;
        this.checkIfAlreadyApplied();
      }
    });
  }
}
