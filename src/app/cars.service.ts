import {Injectable} from '@angular/core';
import {Car} from './car';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() {
  }

  getCars(): Observable<Car[]> {
    return of([
      {name: 'Fiat', price: 200, available: true},
      {name: 'Ford', price: 200, available: false},
      {name: 'Volvo', price: 400, available: true}
    ]);
  }
}
