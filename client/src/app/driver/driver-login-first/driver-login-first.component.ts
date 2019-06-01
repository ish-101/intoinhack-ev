import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserService} from "../../user.service";
import {User} from "../../user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-driver-login-first',
  templateUrl: './driver-login-first.component.html',
  styleUrls: ['./driver-login-first.component.scss']
})
export class DriverLoginFirstComponent implements OnInit {
  user: User = new User({});

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signUp(): void {
    this.userService.createUser(this.user)
      .subscribe((user: User) => {
        this.userService.storeToken(user.username);
        this.router.navigate(['driver', 'home']);
      });
  }
}
