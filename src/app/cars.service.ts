import {Injectable} from '@angular/core';
import {Car, CarPage} from './car';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private restApiUrl = "http://dev.blackfernsoft.pl:8088/rental";

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<CarPage> {
    return this.httpClient.get(this.restApiUrl + "/cars");
  }

  getCarById(id: number): Observable<Car> {
    return this.httpClient.get(this.restApiUrl + `/cars/${id}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.httpClient.post(this.restApiUrl + "/cars", car);
  }
}
