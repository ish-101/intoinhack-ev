import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminContainerComponent} from "./admin/admin-container/admin-container.component";
import {DriverContainerComponent} from "./driver/driver-container/driver-container.component";
import {StationContainerComponent} from "./station/station-container/station-container.component";

const routes: Routes = [
  { path: 'admin', component: AdminContainerComponent },
  { path: 'driver', component: DriverContainerComponent },
  { path: 'station', component: StationContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
