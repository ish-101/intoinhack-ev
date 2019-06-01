import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverBaseComponent } from './driver-base.component';

describe('DriverBaseComponent', () => {
  let component: DriverBaseComponent;
  let fixture: ComponentFixture<DriverBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
