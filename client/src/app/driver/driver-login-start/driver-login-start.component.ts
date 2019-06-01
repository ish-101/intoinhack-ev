import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {User} from "../../user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-driver-login-start',
  templateUrl: './driver-login-start.component.html',
  styleUrls: ['./driver-login-start.component.scss']
})
export class DriverLoginStartComponent implements OnInit {
  user: User = new User({});

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.userService.login(this.user.username)
      .subscribe((user: User) => {
        this.userService.storeToken(user.username);
          this.router.navigate(['driver', 'home']);
      });
  }
}
