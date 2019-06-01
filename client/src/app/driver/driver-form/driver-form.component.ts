import { Component, OnInit } from '@angular/core';
import {VehicleSimulation} from "../../vehicle-simulation.model";
import {CarTypeService} from "../../car-type.service";
import {CarType} from "../../car-type.model";
import {UserService} from "../../user.service";
import {User} from "../../user.model";
import {VehicleSimulationService} from "../../vehicle-simulation.service";

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent implements OnInit {
  vehicleSimulation: VehicleSimulation;
  carTypes: CarType[];

  constructor(private carTypeService: CarTypeService, private userService: UserService, private vehicleSimulationService: VehicleSimulationService) { }

  ngOnInit() {
    this.getCarTypes();
    this.getVehicleSimulation();
  }

  private getCarTypes(): void {
    this.carTypeService.getCarTypes()
      .subscribe((carTypes: CarType[]) => {
        this.carTypes = carTypes;
      });
  }

  private getVehicleSimulation(): void {
    this.userService.getUser()
      .subscribe((user: User) => {
        this.vehicleSimulation = user.vehicle_simulation;
        console.log(user.vehicle_simulation);
      });
  }

  updateVehicleSimulation(): void {
    this.vehicleSimulationService.updateVehicleSimulation(this.vehicleSimulation)
      .subscribe();
  }
}
