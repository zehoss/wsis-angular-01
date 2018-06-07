import {Component, OnInit} from '@angular/core';
import {Car} from "../../car";
import {CarsService} from "../../cars.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  private carList: Car[];

  constructor(private carService: CarsService) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {
      this.carList = cars;
    });
  }

}
