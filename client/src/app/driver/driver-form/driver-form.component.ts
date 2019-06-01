import { Component, OnInit } from '@angular/core';
import {VehicleSimulation} from "../../vehicle-simulation.model";
import {CarTypeService} from "../../car-type.service";
import {CarType} from "../../car-type.model";

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent implements OnInit {
  vehicleSimulation: VehicleSimulation;
  carTypes: CarType[];

  constructor(private carTypeService: CarTypeService) { }

  ngOnInit() {
    this.getCarTypes();
  }

  private getCarTypes(): void {
    this.carTypeService.getCarTypes()
      .subscribe((carTypes: CarType[]) => {
        console.log(carTypes);
        this.carTypes = carTypes;
      });
  }
}
