import { Component } from '@angular/core';

@Component({
  selector: 'mb-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class MbJobsComponent {
  result: any = [];

  constructor() { }

  filterHandler(result: any)
  {
    if(result != []) this.result = result;
  }
}
