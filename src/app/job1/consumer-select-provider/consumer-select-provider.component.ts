import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from '../job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mb-consumer-select-provider',
  templateUrl: './consumer-select-provider.component.html',
  styleUrls: ['./consumer-select-provider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MbConsumerSelectProviderComponent implements OnInit {
  private jobId: number;
  private requests: any;

  constructor(private jobService: JobService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.jobId = params.idJob;
    });
  }

  ngOnInit() {
    this.jobService.getRequestsForJob(this.jobId, 10000)
      .then((res) => {
        console.log(res);
        this.requests = res;
      })
      .catch(err => console.log(err));
  }

}
