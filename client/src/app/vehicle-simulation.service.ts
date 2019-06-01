import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {Observable} from "rxjs";
import {VehicleSimulation} from "./vehicle-simulation.model";
import {HttpClient} from "@angular/common/http";

const host = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class VehicleSimulationService {

  constructor(private http: HttpClient) { }

  updateVehicleSimulation(vehicleSimulation: VehicleSimulation): Observable<any> {
    const path = `vehicle_simulations/${vehicleSimulation._id}`;
    const url = `${host}/${path}`;
    return this.http.put<User>(url, vehicleSimulation);
  }

}
