import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLoginStartComponent } from './driver-login-start.component';

describe('DriverLoginStartComponent', () => {
  let component: DriverLoginStartComponent;
  let fixture: ComponentFixture<DriverLoginStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverLoginStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLoginStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
