import {Component, OnInit, ViewChild} from '@angular/core';
import {Car} from "../../car";
import {CarsService} from "../../cars.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-car-details-edit',
  templateUrl: './car-details-edit.component.html',
  styleUrls: ['./car-details-edit.component.css']
})
export class CarDetailsEditComponent implements OnInit {
  @ViewChild("form") form: NgForm;
  defaultPrice: number = 120;
  private car: Car;

  constructor(private carsService: CarsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.car = this.carsService.getCarById(+parameters['id']);
    })
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.valid);
    let car: Car = new Car(123, this.form.value.name, this.form.value.price, this.form.value.available);
    this.carsService.addCar(car);
  }

}
