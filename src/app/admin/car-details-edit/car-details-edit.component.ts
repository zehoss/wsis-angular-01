import {Component, OnInit, ViewChild} from '@angular/core';
import {Car} from "../../car";
import {CarsService} from "../../cars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-car-details-edit',
  templateUrl: './car-details-edit.component.html',
  styleUrls: ['./car-details-edit.component.css']
})
export class CarDetailsEditComponent implements OnInit {
  @ViewChild("form") form: NgForm;
  @ViewChild("price") price: number;

  private car: Car = new Car(2, "Car name", 100.50, false);

  constructor(private carsService: CarsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      if (parameters && parameters['id']) {
        this.carsService.getCarById(+parameters['id']).subscribe(response => {
          this.car = response;
        });
      }
    })
  }

  onSubmit() {
    console.log(this.car);
    console.log(this.form.value);
    console.log(this.form.valid);
    console.log(this.form.dirty);
    console.log(this.form.touched);

    if (this.form.valid) {
      console.log('this.car', this.car);
      this.carsService.addCar(this.car).subscribe(value => {
        this.router.navigate(['/admin/cars']);
      });
    }
  }

}
