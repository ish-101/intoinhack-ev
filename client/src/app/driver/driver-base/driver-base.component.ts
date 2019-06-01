import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-driver-base',
  template: '',
})
export class DriverBaseComponent implements OnInit {
  constructor(protected router: Router, protected userService: UserService) {}

  ngOnInit() {
    if (!this.userService.loadToken()) {
      this.router.navigate(['driver', 'login']);
    }
  }
}
