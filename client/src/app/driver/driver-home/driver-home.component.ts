import { Component, OnInit } from '@angular/core';
import {DriverBaseComponent} from "../driver-base/driver-base.component";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.scss']
})
export class DriverHomeComponent extends DriverBaseComponent implements OnInit {
  constructor(protected router: Router, protected userService: UserService) {
    super(router, userService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
