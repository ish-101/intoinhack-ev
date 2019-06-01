import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLogoutComponent } from './driver-logout.component';

describe('DriverLogoutComponent', () => {
  let component: DriverLogoutComponent;
  let fixture: ComponentFixture<DriverLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
