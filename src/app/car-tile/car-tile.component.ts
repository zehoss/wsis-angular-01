import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-tile',
  templateUrl: './car-tile.component.html',
  styleUrls: ['./car-tile.component.css']
})
export class CarTileComponent {

  @Input() carName;
  @Input() carPrice;
  @Input() numberOfSeats;
  @Input() limit;
  @Input() deposit;
  @Input() available;

  constructor() {
  }

  onRentCar(): void {
    this.available = !this.available;
  }
}
