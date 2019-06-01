import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarType} from "./car-type.model";

const host = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {
  constructor(private http: HttpClient) { }

  getCarTypes(): Observable<CarType[]> {
    const path = 'car_types';
    const url = `${host}/${path}`;
    return this.http.get<CarType[]>(url);
  }
}
