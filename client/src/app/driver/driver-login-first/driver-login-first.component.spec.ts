import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLoginFirstComponent } from './driver-login-first.component';

describe('DriverLoginFirstComponent', () => {
  let component: DriverLoginFirstComponent;
  let fixture: ComponentFixture<DriverLoginFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverLoginFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLoginFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
