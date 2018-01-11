import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { JobService } from '../../job.service';

@Component({
  selector: 'mb-apply-job-dialog',
  templateUrl: './apply-job-dialog.component.html',
  styleUrls: ['./apply-job-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MbApplyJobDialogComponent implements OnInit {
  message: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jobService: JobService,
    private dialogRef: MatDialogRef<MbApplyJobDialogComponent>
  ) { }

  ngOnInit() {
  }

  send() {
    console.log(this.message);
    console.log(this.data.jobId);
    this.jobService.providerApplyToJob(this.data.jobId, this.message)
      .then((res) => {
        this.dialogRef.close(true);
      })
      .catch((err) => console.log(err));
  }

}
