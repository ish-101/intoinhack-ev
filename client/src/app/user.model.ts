import { cast, Castable } from '@bitr/castable';

export class User extends Castable{
  username: string;
  license_number: string;
}
