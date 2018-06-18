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
  private car: Car = new Car();

  constructor(private carsService: CarsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      console.log('params', parameters);
      if (parameters && parameters['id']) {
        this.carsService.getCarById(+parameters['id']).subscribe(response => {
          console.log('response', response);
          this.car = response;
        });
      }
    })
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.valid);
    if (this.form.valid) {
      console.log('this.car', this.car);
      this.carsService.addCar(this.car).subscribe(value => {
        this.router.navigate(['/admin/cars']);
      });
    }
  }

}
