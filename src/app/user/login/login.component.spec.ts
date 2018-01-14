import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: MbLoginComponent;
  let fixture: ComponentFixture<MbLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
