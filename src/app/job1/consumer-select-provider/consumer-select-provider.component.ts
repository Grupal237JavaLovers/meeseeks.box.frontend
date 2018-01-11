import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from '../job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mb-consumer-select-provider',
  templateUrl: './consumer-select-provider.component.html',
  styleUrls: ['./consumer-select-provider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MbConsumerSelectProviderComponent implements OnInit, OnDestroy {
  private jobId: number;
  requests: any;
  message = '';
  private getRequests: any;

  constructor(private jobService: JobService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.jobId = params.idJob;
    });
  }

  ngOnInit() {
    this.getRequestsForJob();
    this.getRequests = setInterval(() => {
      this.getRequestsForJob();
    }, 5000);

  }

  getRequestsForJob() {
    this.jobService.getRequestsForJob(this.jobId, 10000)
      .then((res) => {
        console.log(res);
        this.requests = res;
        if (res.length === 0) {
          this.message = 'Nobody applied for the job';
        } else {
          this.message = '';
        }
      })
      .catch(err => console.log(err));
  }

  ngOnDestroy() {
    if (this.getRequests) {
      clearInterval(this.getRequests);
    }
  }

}
