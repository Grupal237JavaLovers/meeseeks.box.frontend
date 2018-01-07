/**
 * Created by csebestin on 11/21/2017.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mb-jobs-grid',
  templateUrl: './jobs-grid.component.html',
  styleUrls: ['./jobs-grid.component.scss'],
})
export class MbJobsGridComponent {
  @Input() jobs: any = [];
  @Output() jobClicked = new EventEmitter<any>();

  onJobClicked(job) {
    this.jobClicked.emit(job);
  }
}
