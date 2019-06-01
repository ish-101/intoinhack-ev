import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminContainerComponent } from './admin/admin-container/admin-container.component';
import { DriverContainerComponent } from './driver/driver-container/driver-container.component';
import { StationContainerComponent } from './station/station-container/station-container.component';
import { ChargingScreenComponent } from './common/charging-screen/charging-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminContainerComponent,
    DriverContainerComponent,
    StationContainerComponent,
    ChargingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
