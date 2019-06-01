import { cast, Castable } from '@bitr/castable';
import {CarType} from "./car-type.model";

const host = 'http://localhost:3000/api';

export class VehicleSimulation extends Castable{
  _id: string;
  @cast() car_type: CarType;
  @cast() latitude: number;
  @cast() longitude: number;
  @cast() charging: number;
}
