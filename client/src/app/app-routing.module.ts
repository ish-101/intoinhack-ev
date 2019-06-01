import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminContainerComponent} from "./admin/admin-container/admin-container.component";
import {StationContainerComponent} from "./station/station-container/station-container.component";
import {DriverLoginComponent} from "./driver/driver-login/driver-login.component";
import {DriverHomeComponent} from "./driver/driver-home/driver-home.component";
import {DriverLogoutComponent} from "./driver/driver-logout/driver-logout.component";

const routes: Routes = [
  { path: '', redirectTo: 'driver', pathMatch: 'full' },
  { path: 'admin', component: AdminContainerComponent },
  { path: 'driver', children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'login', component: DriverLoginComponent },
      { path: 'logout', component: DriverLogoutComponent },
      { path: 'home', component: DriverHomeComponent }
      // { path: 'find' },
      // { path: 'station/:StationId' },
      // { path: 'queue' },
      // { path: 'charge' }
    ]
  },
  { path: 'station', component: StationContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
