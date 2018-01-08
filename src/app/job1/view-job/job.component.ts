/**
 * Created by Clusi on 12/17/2017.
 */
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
@Component({
  selector: 'mb-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class MbJobComponent implements OnInit {

  displayedColumns = ['day', 'startHour', 'endHour'];
  /* job: any;
   dataSource: any;*/
  errors = '';
  job = {
    availabilities: [
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
      {day: 'tuesday', startHour: '22:10:00', endHour: '02:02:00'},
    ],
    category: 'category',
    job: {
      name: 'Suge ',
      description: 'descroprskgvdfj kln;kldfnvb↵fdslkf;lsk;f fijsdogodsfjg kdsjglkdfnglk fkjdskfjls',
      expirationDate: '1212-12-21T14:12',
      location: 'location',
      type: 'type',
      price: 1213,
      id: 10,
    },
  };
  dataSource = new MatTableDataSource<Availability>(this.job.availabilities);

  constructor(private route: ActivatedRoute,
              private jobService: JobService,
              private router: Router) {
  }

  ngOnInit(): void {
    /*this.getJob();*/
  }

  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJobById(id)
      .then(res => {
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

}

export interface Availability {
  day: string;
  startHour: string;
  endHour: string;
}
