import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserService} from "../../user.service";
import {User} from "../../user.model";

@Component({
  selector: 'app-driver-login-first',
  templateUrl: './driver-login-first.component.html',
  styleUrls: ['./driver-login-first.component.scss']
})
export class DriverLoginFirstComponent implements OnInit {
  user: User = new User({});

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signUp(): void {
    this.userService.create(this.user)
      .subscribe(() => {
        this.user = new User({});
      });
  }
}
