import {Injectable} from '@angular/core';
import {Car} from './car';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[];

  constructor() {
    this.cars = [
      {id: 1, name: 'Fiat', price: 200, available: true},
      {id: 2, name: 'Ford', price: 280, available: false},
      {id: 3, name: 'Volvo', price: 400, available: true}
    ];
  }

  getCars(): Observable<Car[]> {
    return of(this.cars);
    // return fromPromise(
    //   new Promise(resolve =>
    //     setTimeout(() => resolve(this.cars), 3000)
    //   )
    // );
  }

  getCarById(id: number): Car {
    return this.cars.find(car => car.id === id);
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }
}
