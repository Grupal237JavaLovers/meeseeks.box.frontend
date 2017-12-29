import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'mb-landing-page-video',
  templateUrl: './landing-page-video.component.html',
  styleUrls: ['./landing-page-video.component.scss'],
})
export class MbLandingPageVideoComponent {

  constructor(
    public dialogRef: MatDialogRef<MbLandingPageVideoComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
