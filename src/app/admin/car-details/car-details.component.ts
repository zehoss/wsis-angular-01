import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../car";
import {CarsService} from "../../cars.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  private car: Car;

  constructor(private router: Router, private route: ActivatedRoute, private carsService: CarsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      console.log(parameters);
      this.carsService.getCarById(+parameters['id']).subscribe(response => {
        this.car = response;
      });
    })
  }

  goBackToCars() {
    this.router.navigate(['admin', 'cars']);
  }
}
