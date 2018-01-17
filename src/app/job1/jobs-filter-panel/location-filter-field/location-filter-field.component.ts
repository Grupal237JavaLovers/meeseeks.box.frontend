import {Component, OnInit, Output, ViewEncapsulation, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'mb-location-filter-field',
  templateUrl: './location-filter-field.component.html',
  styleUrls: ['./location-filter-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LocationFilterFieldComponent implements OnInit {
  @Input() locationValue: any;

  constructor() {
  }

  ngOnInit() {
    this.LocationValue.emit(this.locationValue);
  }

  @Output() LocationValue = new EventEmitter();

  locationValueSelected(){
    this.LocationValue.emit(this.locationValue);
  }


}
