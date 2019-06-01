import { cast, Castable } from '@bitr/castable';
import {VehicleSimulation} from "./vehicle-simulation.model";

export class User extends Castable{
  _id: string;
  username: string;
  license_number: string;
  vehicle_simulation: VehicleSimulation;
}
