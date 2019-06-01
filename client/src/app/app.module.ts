import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminContainerComponent } from './admin/admin-container/admin-container.component';
import { StationContainerComponent } from './station/station-container/station-container.component';
import { ChargingScreenComponent } from './common/charging-screen/charging-screen.component';
import { DriverFormComponent } from './driver/driver-form/driver-form.component';
import { DriverLoginComponent } from './driver/driver-login/driver-login.component';
import { DriverBaseComponent } from './driver/driver-base/driver-base.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DriverLoginStartComponent } from './driver/driver-login-start/driver-login-start.component';
import { DriverLoginFirstComponent } from './driver/driver-login-first/driver-login-first.component';
import { DriverHomeComponent } from './driver/driver-home/driver-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminContainerComponent,
    StationContainerComponent,
    ChargingScreenComponent,
    DriverFormComponent,
    DriverLoginComponent,
    DriverBaseComponent,
    DriverLoginStartComponent,
    DriverLoginFirstComponent,
    DriverHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
