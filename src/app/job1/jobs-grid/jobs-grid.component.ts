/**
 * Created by csebestin on 11/21/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'mb-jobs-grid',
  templateUrl: './jobs-grid.component.html',
  styleUrls: ['./jobs-grid.component.scss'],
})
export class MbJobsGridComponent {

  dogs: Object[] = [
    {name: 'Porter', human: 'Kara'},
    {name: 'Mal', human: 'Jeremy'},
    {name: 'Koby', human: 'Igor'},
    {name: 'Razzle', human: 'Ward'},
    {name: 'Molly', human: 'Rob'},
    {name: 'Husi', human: 'Matias'},
  ];

  jobs: Object[] = [
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },
    {
      id: 'id',
      name: 'name',
      description: 'ceva desciere pentru job, nimci alltceva important',
      location: 'locatie undeva',
      type: 'tip',
      price: '2.5',
      expiration: '1509657709000',
      created: '1509657709000',
    },

  ];
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
